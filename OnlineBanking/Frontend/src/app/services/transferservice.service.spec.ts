import { TestBed } from '@angular/core/testing';

import { TransferserviceService } from './transferservice.service';

describe('TransferserviceService', () => {
  let service: TransferserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
