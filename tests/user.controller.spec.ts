import { add } from '../src/controllers/user.controller';

describe('simple Addition', () => {
  it('should add numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
