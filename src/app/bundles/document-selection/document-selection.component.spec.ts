import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSelectionComponent } from './document-selection.component';
import {NO_ERRORS_SCHEMA, QueryList} from '@angular/core';
import {DocumentItemComponent} from './document-item/document-item.component';

class MockDocumentItemComponent extends DocumentItemComponent {
  checked: boolean;

  constructor() {
    super();
    this.checked = false;
  }
}

describe('DocumentSelectionComponent', () => {
  let component: DocumentSelectionComponent;
  let fixture: ComponentFixture<DocumentSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentSelectionComponent, DocumentItemComponent],
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

  describe('updateSelectAll', () => {
    it('should change selectAll boolean opposite to its assigned value', function () {
      component.updateSelectAll();
      expect(component.selectAllStatus).toBeTruthy();
    });
  });

  describe('checkAllCheckboxSelected', () => {
    const documentItemComponent1 = new MockDocumentItemComponent();
    const documentItemComponent2 = new MockDocumentItemComponent();

    it('should change selectAllStatus to false when no documents are selected', function () {
      component.checkAllCheckboxSelected();
      expect(component.selectAllStatus).toBeFalsy();
    });

    it('should change selectAllStatus to false when some of the documents are selected', function () {
      documentItemComponent1.checked = true;
      documentItemComponent2.checked = false;
      component.documentItem = new QueryList<DocumentItemComponent>();
      component.documentItem.reset([documentItemComponent1, documentItemComponent2]);
      component.checkAllCheckboxSelected();
      expect(component.selectAllStatus).toBeFalsy();
    });

    it('should change selectAllStatus to true when all documents are selected', function () {
      documentItemComponent1.checked = true;
      documentItemComponent2.checked = true;
      component.documentItem = new QueryList<DocumentItemComponent>();
      component.documentItem.reset([documentItemComponent1, documentItemComponent2]);
      component.checkAllCheckboxSelected();
      expect(component.selectAllStatus).toBeTruthy();
    });
  });

  describe('selectedCheckbox', () => {
    it('should filter the selected documents and print them', function () {
      const documentItemComponent = new MockDocumentItemComponent();
      documentItemComponent.checked = true;
      component.documentItem.reset([documentItemComponent]);
      spyOn(console, 'log');
      component.selectedCheckbox();
      expect(console.log).toHaveBeenCalled();
      expect(console.log).not.toBe([]);
    });
  });
});
