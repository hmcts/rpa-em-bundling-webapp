import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSelectorComponent } from './case-selector.component';

describe('CaseSelectorComponent', () => {
  let component: CaseSelectorComponent;
  let fixture: ComponentFixture<CaseSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
