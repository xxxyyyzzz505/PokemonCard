import { TestBed } from '@angular/core/testing';

import { FinalpageGuard } from './finalpage.guard';

describe('FinalpageGuard', () => {
  let guard: FinalpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FinalpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
