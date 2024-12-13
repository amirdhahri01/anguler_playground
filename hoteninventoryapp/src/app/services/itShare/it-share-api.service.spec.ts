import { TestBed } from '@angular/core/testing';

import { ItShareApiService } from './it-share-api.service';

describe('ItShareApiService', () => {
  let service: ItShareApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItShareApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
