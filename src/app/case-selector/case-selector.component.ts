import { Component, OnInit } from '@angular/core';
import {MockCaseDocuments} from '../mockcasedocument';

@Component({
  selector: 'app-case-selector',
  templateUrl: './case-selector.component.html',
  styleUrls: ['./case-selector.component.scss']
})
export class CaseSelectorComponent implements OnInit {

  cases = MockCaseDocuments;

  constructor() { }

  ngOnInit() {
  }

}
