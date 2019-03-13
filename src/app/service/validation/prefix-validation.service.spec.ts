import { TestBed } from '@angular/core/testing';

import { PrefixValidationService } from './prefix-validation.service';

describe('PrefixValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrefixValidationService = TestBed.get(PrefixValidationService);
    expect(service).toBeTruthy();
  });
});
