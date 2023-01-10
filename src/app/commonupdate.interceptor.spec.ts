import { TestBed } from '@angular/core/testing';

import { CommonupdateInterceptor } from './commonupdate.interceptor';

describe('CommonupdateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CommonupdateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CommonupdateInterceptor = TestBed.inject(CommonupdateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
