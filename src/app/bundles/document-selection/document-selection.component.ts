import { Component, OnInit } from '@angular/core';
import { MockCaseDocuments } from '../shared/mockcasedocumentdata';

@Component({
  selector: 'app-document-selection',
  templateUrl: './document-selection.component.html',
  styleUrls: ['./document-selection.component.scss']
})
export class DocumentSelectionComponent implements OnInit {

  cases = MockCaseDocuments;
  selectAllStatus: boolean;
  constructor() { }

  ngOnInit() {
    this.selectAllStatus = false;
  }

  selectAll() {
    this.selectAllStatus = !this.selectAllStatus;
  }

}
