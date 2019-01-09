import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentItemComponent } from './document-item.component';

describe('DocumentItemComponent', () => {
  let component: DocumentItemComponent;
  let fixture: ComponentFixture<DocumentItemComponent>;

  const document = { id: 1, name: 'Marriage Certificate', DM_URI: 'example_url', folder: 'Certificates' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentItemComponent);
    component = fixture.componentInstance;
    component.document = document;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateCheck', () => {
    it('should store the opposite boolean of checked', function () {
      component.updateCheck();
      expect(component.checked).toBeTruthy();
    });
  });
});
