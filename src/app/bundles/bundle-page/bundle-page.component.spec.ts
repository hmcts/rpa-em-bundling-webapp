import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlePageComponent } from './bundle-page.component';

describe('BundlePageComponent', () => {
  let component: BundlePageComponent;
  let fixture: ComponentFixture<BundlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
