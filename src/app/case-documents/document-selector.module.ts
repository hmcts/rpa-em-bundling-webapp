import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentSelectorRoutingModule } from './document-selector-routing.module';
import { DocumentSelectorComponent } from './document-selector/document-selector.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentSelectorRoutingModule,
  ],
  declarations: [
    DocumentSelectorComponent
  ]
})
export class DocumentSelectorModule { }
