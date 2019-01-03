import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundle-details',
  templateUrl: './bundle-details.component.html',
  styleUrls: ['./bundle-details.component.scss']
})
export class BundleDetailsComponent implements OnInit {

  bundleName: string;
  bundleDescription: string;

  constructor() { }

  ngOnInit() {
  }

  saveBundleDetails() {
    console.log('name: ' + this.bundleName + ' bundle description: ' + this.bundleDescription);
  }

}
