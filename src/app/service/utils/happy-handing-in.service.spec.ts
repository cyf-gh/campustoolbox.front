import { TestBed } from '@angular/core/testing';

import { HappyHandingInService } from './happy-handing-in.service';

describe('HappyHandingInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HappyHandingInService = TestBed.get(HappyHandingInService);
    expect(service).toBeTruthy();
  });
});
