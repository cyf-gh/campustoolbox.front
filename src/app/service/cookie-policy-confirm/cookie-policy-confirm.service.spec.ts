import { TestBed } from '@angular/core/testing';

import { CookiePolicyConfirmService } from './cookie-policy-confirm.service';

describe('CookiePolicyConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookiePolicyConfirmService = TestBed.get(CookiePolicyConfirmService);
    expect(service).toBeTruthy();
  });
});
