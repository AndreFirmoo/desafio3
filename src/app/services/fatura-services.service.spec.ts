import { TestBed } from '@angular/core/testing';

import { FaturaServicesService } from './fatura-services.service';

describe('FaturaServicesService', () => {
  let service: FaturaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaturaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
