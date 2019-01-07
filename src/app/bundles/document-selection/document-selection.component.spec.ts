import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSelectionComponent } from './document-selection.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DocumentSelectionComponent', () => {
  let component: DocumentSelectionComponent;
  let fixture: ComponentFixture<DocumentSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSelectionComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSelectionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
