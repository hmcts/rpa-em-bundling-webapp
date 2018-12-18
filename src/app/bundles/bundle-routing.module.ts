import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BundlePageComponent } from './bundle-page/bundle-page.component';
import { BundleDetailsComponent } from './bundle-details/bundle-details.component';

const routes: Routes = [
  {path: 'details', component: BundleDetailsComponent},
  {path: 'details:id', component: BundleDetailsComponent},
  {path: 'page:id', component: BundlePageComponent},
  {path: '', redirectTo: 'page:id', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class BundleRoutingModule { }
