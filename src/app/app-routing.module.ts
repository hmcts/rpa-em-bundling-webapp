import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'document-selection', pathMatch: 'full'},
  {path: 'document-selection', loadChildren: './case-documents/document-selector.module#DocumentSelectorModule'},
  {path: 'bundle', loadChildren: './bundles/bundle.module#BundleModule'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
