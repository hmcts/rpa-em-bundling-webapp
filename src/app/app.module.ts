import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {APP_INITIALIZER} from '@angular/core';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
// import { BundlesComponent } from './bundles/bundles.component'; TODO DELETE THIS
// import {AppConfig} from './app.config'; // TODO What is this for?

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule & HttpClientModule excluded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
