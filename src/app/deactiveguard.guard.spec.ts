import { TestBed } from '@angular/core/testing';

import { DeactiveguardGuard } from './deactiveguard.guard';

describe('DeactiveguardGuard', () => {
  let guard: DeactiveguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactiveguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
