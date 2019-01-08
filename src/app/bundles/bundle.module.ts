import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BundleRoutingModule } from './bundle-routing.module';
import { BundlePageComponent } from './bundle-page/bundle-page.component';
import { BundleDetailsComponent } from './bundle-details/bundle-details.component';
import { DocumentSelectionComponent } from './document-selection/document-selection.component';
import { DocumentItemComponent } from './document-selection/document-item/document-item.component';
import { PanelComponent } from './shared/panel/panel.component';
import { BundleDocumentsComponent } from "./bundle-page/documents/documents.component";
import { StoreModule } from '@ngrx/store';
import { bundleReducer } from "./bundle-page/bundle-page.reducer";
import { BundlePageEffects } from "./bundle-page/bundle-page.effects";
import { BundleService } from "./shared/bundle.service";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    StoreModule.forRoot({ bundle: bundleReducer }),
    EffectsModule.forRoot([BundlePageEffects]),
    CommonModule,
    HttpClientModule,
    FormsModule,
    BundleRoutingModule
  ],
  declarations: [
    BundlePageComponent,
    BundleDocumentsComponent,
    BundleDetailsComponent,
    DocumentSelectionComponent,
    DocumentItemComponent,
    PanelComponent
  ],
  providers: [BundleService, BundlePageEffects]
})
export class BundleModule {}
