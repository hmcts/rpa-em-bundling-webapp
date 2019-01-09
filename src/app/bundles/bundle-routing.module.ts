import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BundlePageComponent } from './bundle-page/bundle-page.component';
import { BundleDetailsComponent } from './bundle-details/bundle-details.component';
import { DocumentSelectionComponent } from './document-selection/document-selection.component';
import { BundlePageGuard } from './bundle-page/bundle-page.guard';

const routes: Routes = [
  { path: 'detail/:id', component: BundleDetailsComponent },
  {
    path: 'page/:id',
    component: BundlePageComponent,
    canActivate: [BundlePageGuard]
  },
  { path: 'import/:id', component: DocumentSelectionComponent },
  { path: '', redirectTo: 'page/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  providers: [BundlePageGuard],
  exports: [
    RouterModule
  ]
})
export class BundleRoutingModule {
}
