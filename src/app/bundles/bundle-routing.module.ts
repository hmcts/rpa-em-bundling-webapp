import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BundlePageComponent } from './bundle-page/bundle-page.component';
import { BundleDetailsComponent } from './bundle-details/bundle-details.component';
import { DocumentSelectionComponent } from './document-selection/document-selection.component';

const routes: Routes = [
  {path: 'detail/:id', component: BundleDetailsComponent},
  {path: 'page/:id', component: BundlePageComponent},
  {path: 'import/:id', component: DocumentSelectionComponent},
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
