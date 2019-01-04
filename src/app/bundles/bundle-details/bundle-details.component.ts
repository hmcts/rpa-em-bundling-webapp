import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundle-details',
  templateUrl: './bundle-details.component.html',
  styleUrls: ['./bundle-details.component.scss']
})
export class BundleDetailsComponent implements OnInit {

  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  saveBundleDetails() {
    console.log('name: ' + this.name + ' bundle description: ' + this.description);
  }

}
