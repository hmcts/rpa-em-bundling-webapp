import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleDocumentsComponent } from "./documents.component";

describe('BundleDocumentsComponent', () => {
  let component: BundleDocumentsComponent;
  let fixture: ComponentFixture<BundleDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BundleDocumentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
