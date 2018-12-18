import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {APP_INITIALIZER} from '@angular/core';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { BundlesComponent } from './bundles/bundles.component'; TODO DELETE THIS
// import {AppConfig} from './app.config'; // TODO What is this for?

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // BrowserAnimationsModule & HttpClientModule excluded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
