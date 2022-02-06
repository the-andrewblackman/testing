import { TestBed } from '@angular/core/testing';

import { PuppyServiceService } from './puppy-service.service';

describe('PuppyServiceService', () => {
  let service: PuppyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuppyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
