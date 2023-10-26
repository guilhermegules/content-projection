import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PortalDirective } from './directives/portal/portal.directive';
import { PortalOutletDirective } from './directives/portal/portal-outlet.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PortalDirective,
    PortalOutletDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
