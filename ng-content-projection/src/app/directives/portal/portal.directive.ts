import { Directive, Input, OnDestroy, TemplateRef } from '@angular/core';
import { PortalData } from './portal.model';
import { PortalOutletDirective } from './portal-outlet.directive';

@Directive({
  selector: '[appPortal]',
})
export class PortalDirective implements OnDestroy {
  private portalData: PortalData | null = null;

  @Input()
  set appPortal(key: string) {
    if (key) {
      this.portalData = {
        key,
        value: this.templateRef,
      };
      PortalOutletDirective.portalContents.set(key, this.portalData);
      PortalOutletDirective.portalContentChanges$.next(
        Array.from(PortalOutletDirective.portalContents.values())
      );
    }
  }

  constructor(private templateRef: TemplateRef<unknown>) {}

  ngOnDestroy(): void {
    if (!this.portalData) return;

    PortalOutletDirective.portalContents.delete(this.portalData.key);
    PortalOutletDirective.portalContentChanges$.next(
      Array.from(PortalOutletDirective.portalContents.values())
    );
    PortalOutletDirective.portalOutletClear$.next(this.portalData);
  }
}
