import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AppConfig} from './app.config';
import { CaseSelectorComponent } from './case-selector/case-selector.component';

// const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CaseSelectorComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,
    //   {enableTracing: true} // <-- debugging purposes only
    // ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
