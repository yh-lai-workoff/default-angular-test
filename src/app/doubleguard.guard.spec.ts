import { TestBed } from '@angular/core/testing';

import { DoubleguardGuard } from './doubleguard.guard';

describe('DoubleguardGuard', () => {
  let guard: DoubleguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoubleguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
