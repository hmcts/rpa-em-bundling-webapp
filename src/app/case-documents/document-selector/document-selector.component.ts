import { Component, OnInit } from '@angular/core';
import { MockCaseDocuments } from '../shared/mockcasedocumentdata';

@Component({
  selector: 'app-document-selector',
  templateUrl: './document-selector.component.html',
  styleUrls: ['./document-selector.component.scss']
})
export class DocumentSelectorComponent implements OnInit {

  cases = MockCaseDocuments;

  constructor() { }

  ngOnInit() {
  }

}
