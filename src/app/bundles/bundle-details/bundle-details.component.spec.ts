import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleDetailsComponent } from './bundle-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('BundleDetailsComponent', () => {
  let component: BundleDetailsComponent;
  let fixture: ComponentFixture<BundleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BundleDetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
