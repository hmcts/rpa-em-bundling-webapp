import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss']
})
export class DocumentItemComponent implements OnInit {

  checked: boolean;

  @Input() document;

  constructor() { }

  ngOnInit() {
    this.checked = false;
  }

  updateCheck() {
    this.checked = !this.checked;
  }

}
