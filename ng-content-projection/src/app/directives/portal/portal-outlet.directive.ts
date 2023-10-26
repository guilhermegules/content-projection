import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  BehaviorSubject,
  ReplaySubject,
  filter,
  map,
  takeUntil,
  tap,
} from 'rxjs';
import { PortalData } from './portal.model';

@Directive({
  selector: '[appPortalOutlet]',
})
export class PortalOutletDirective implements OnDestroy, OnInit {
  @Input()
  public appPortalOutlet: string = '';

  public static portalContents = new Map<string, PortalData>();
  public static portalContentChanges$ = new BehaviorSubject<PortalData[]>([]);
  public static portalOutletClear$ = new ReplaySubject<PortalData>(1);

  private destroyed$ = new ReplaySubject<void>(1);
  private views = new Map<string, EmbeddedViewRef<unknown>>();

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    PortalOutletDirective.portalContentChanges$
      .pipe(
        map((contents) =>
          contents.filter(
            (content) =>
              content.key === this.appPortalOutlet &&
              !this.views.has(content.key)
          )
        ),
        tap((contents) => {
          contents.forEach((content) => {
            const viewRef = this.viewContainerRef.createEmbeddedView(
              content.value
            );
            viewRef.detectChanges();
            this.views.set(content.key, viewRef);
          });
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    PortalOutletDirective.portalOutletClear$
      .pipe(
        filter((portal) => portal && this.views.has(portal.key)),
        takeUntil(this.destroyed$)
      )
      .subscribe((portal) => {
        this.views.delete(portal.key);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
