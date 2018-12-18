import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundleRoutingModule } from './bundle-routing.module';
import { BundlePageComponent } from './bundle-page/bundle-page.component';
import { BundleDetailsComponent } from './bundle-details/bundle-details.component';
import { DocumentSelectionComponent } from './document-selection/document-selection.component';

@NgModule({
  imports: [
    CommonModule,
    BundleRoutingModule
  ],
  declarations: [
    BundlePageComponent,
    BundleDetailsComponent,
    DocumentSelectionComponent
  ]
})
export class BundleModule { }
