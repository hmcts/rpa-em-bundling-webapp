import {Component, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('checkbox') private checkbox;
  constructor() { }

  ngOnInit() {
    this.selectAllStatus = false;
    this.checkbox.checked = false;
  }

  selectAll() {
    // this.updateSelectAllStatus();
    this.selectAllStatus = !this.selectAllStatus;
    this.checkbox.checked = this.selectAllStatus;
    console.log(this.selectAllStatus + '-' + this.checkbox.checked);
  }

  updateSelectAll() {
    this.selectAllStatus = false;
    console.log(this.selectAllStatus + '-' + this.checkbox.checked);
  }


  // updateSelectAllStatus() {
  //   allAreEmpty = true
  //   for doc in docs:
  //     if doc.checked = true
  //       allAreEmpty = false
  //   this.selectAllStatus = false
  // }

}
