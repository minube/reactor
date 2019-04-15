import previousMonth from './previousMonth';

describe('previousMonth()', () => {
  it('default', () => {
    const value = previousMonth(new Date(1980, 3, 4));
    expect(value.year).toBe(1980);
    expect(value.month).toBe(2);
  });

  it('start of year', () => {
    const value = previousMonth(new Date(1980, 0, 4));
    expect(value.year).toBe(1979);
    expect(value.month).toBe(11);
  });
});
