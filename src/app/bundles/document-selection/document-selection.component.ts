import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { MockCaseDocuments } from '../shared/mockcasedocumentdata';
import {DocumentItemComponent} from './document-item/document-item.component';

@Component({
  selector: 'app-document-selection',
  templateUrl: './document-selection.component.html',
  styleUrls: ['./document-selection.component.scss']
})
export class DocumentSelectionComponent implements OnInit {

  documents = MockCaseDocuments;
  selectAllStatus: boolean;

  @ViewChildren('documentItem') documentItem: QueryList<DocumentItemComponent>;

  constructor() { }

  ngOnInit() {
    this.selectAllStatus = false;
  }

  updateSelectAll() {
    this.selectAllStatus = !this.selectAllStatus;
    this.documentItem.map((document: DocumentItemComponent) => document.checked = this.selectAllStatus);
  }

  // checkSelectAllStatus() {
  //   this.selectAllStatus = this.checkSelectedCheckboxes() !== null;
  // }

  // checkSelectedCheckboxes() {
  //   this.documentItem.map((document: DocumentItemComponent) => {
  //     if (document.checked === false) {
  //       return false;
  //     }
  //   });
  // }
}
