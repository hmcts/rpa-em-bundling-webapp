import { Component, Input } from '@angular/core';
import { BundleDocument } from "../../shared/bundle.interfaces";

@Component({
  selector: 'bundle-documents',
  templateUrl: './documents.component.html'
})
export class BundleDocumentsComponent {

  @Input() documents: BundleDocument[];

  constructor() {
  }
}
