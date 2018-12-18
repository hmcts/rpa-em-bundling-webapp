import { TestBed, inject } from '@angular/core/testing';

import { DocumentSelectionService } from './document-selection.service';

describe('DocumentSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentSelectionService]
    });
  });

  it('should be created', inject([DocumentSelectionService], (service: DocumentSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
