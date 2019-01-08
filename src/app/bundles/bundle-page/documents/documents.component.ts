import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BundleDocument } from "../../shared/bundle.interfaces";

@Component({
  selector: 'bundle-documents',
  templateUrl: './documents.component.html'
})
export class BundleDocumentsComponent {

  @Input() documents: BundleDocument[];
  @Output() stitchBundle = new EventEmitter<BundleDocument[]>();

  constructor() {}

}
