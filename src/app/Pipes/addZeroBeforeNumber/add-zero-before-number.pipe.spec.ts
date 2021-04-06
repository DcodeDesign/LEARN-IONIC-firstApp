import { AddZeroBeforeNumberPipe } from './add-zero-before-number.pipe';

describe('AddZeroBeforeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new AddZeroBeforeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
