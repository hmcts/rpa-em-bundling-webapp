import { inject, TestBed } from '@angular/core/testing';

import { BundleService } from './bundle.service';
import { HttpClientModule } from '@angular/common/http';

describe('BundleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BundleService]
    });
  });

  it('should be created', inject([BundleService], (service: BundleService) => {
    expect(service).toBeTruthy();
  }));
});
