import {Component, OnInit} from '@angular/core';
import { MockCaseDocuments } from '../shared/mockcasedocumentdata';

@Component({
  selector: 'app-document-selection',
  templateUrl: './document-selection.component.html',
  styleUrls: ['./document-selection.component.scss']
})
export class DocumentSelectionComponent implements OnInit {

  cases = MockCaseDocuments;
  selectAllStatus: boolean;
  checked: boolean;

  constructor() { }

  ngOnInit() {
    this.selectAllStatus = false;
    this.checked = false;
  }

  selectAll() {
    this.selectAllStatus = !this.selectAllStatus;
    this.checked = this.selectAllStatus;
  }

  updateSelectAll() {
    this.selectAllStatus = false;
  }


  // updateSelectAllStatus() {
  //   allAreEmpty = true
  //   for doc in docs:
  //     if doc.checked = true
  //       allAreEmpty = false
  //   this.selectAllStatus = false
  // }

}
