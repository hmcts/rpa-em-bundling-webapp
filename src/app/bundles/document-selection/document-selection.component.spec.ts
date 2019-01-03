import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSelectionComponent } from './document-selection.component';
import {NO_ERRORS_SCHEMA, QueryList} from '@angular/core';

describe('DocumentSelectionComponent', () => {
  let component: DocumentSelectionComponent;
  let fixture: ComponentFixture<DocumentSelectionComponent>;

  const documents = [
    { id: 1, name: 'Marriage Certificate', DM_URI: 'example_url', folder: 'Certificates' },
    { id: 2, name: 'Divorce Order', DM_URI: 'example_url', folder: 'Orders' },
    { id: 3, name: 'Non-molestation Order', DM_URI: 'example_url', folder: 'Orders' }
  ];

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
    component.documentItem = new QueryList();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
