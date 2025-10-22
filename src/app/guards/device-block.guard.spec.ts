import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { deviceBlockGuard } from './device-block.guard';

describe('deviceBlockGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deviceBlockGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
