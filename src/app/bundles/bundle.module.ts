import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundleRoutingModule } from './bundle-routing.module';
import { BundlePageComponent } from './bundle-page/bundle-page.component';
import { BundleDetailsComponent } from './bundle-details/bundle-details.component';
import { DocumentSelectionComponent } from './document-selection/document-selection.component';
import { DocumentItemComponent } from './document-selection/document-item/document-item.component';

@NgModule({
  imports: [
    CommonModule,
    BundleRoutingModule
  ],
  declarations: [
    BundlePageComponent,
    BundleDetailsComponent,
    DocumentSelectionComponent,
    DocumentItemComponent
  ]
})
export class BundleModule { }
