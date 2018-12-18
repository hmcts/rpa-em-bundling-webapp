import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentSelectorComponent } from './document-selector/document-selector.component';

const routes: Routes = [
  {path: '', component: DocumentSelectorComponent},
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
export class DocumentSelectorRoutingModule { }
