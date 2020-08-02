import { LimitAccessGuard } from './limit-access-guard';

describe('LimitAccessGuard', () => {
  it('should create an instance', () => {
    expect(new LimitAccessGuard()).toBeTruthy();
  });
});
