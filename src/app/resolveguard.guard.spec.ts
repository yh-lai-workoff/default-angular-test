import { TestBed } from '@angular/core/testing';

import { ResolveguardGuard } from './resolveguard.guard';

describe('ResolveguardGuard', () => {
  let guard: ResolveguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
