import nextMonth from './nextMonth';

describe('nextMonth()', () => {
  it('default', () => {
    const value = nextMonth(new Date(1980, 3, 4));
    expect(value.year).toBe(1980);
    expect(value.month).toBe(4);
  });

  it('end of year', () => {
    const value = nextMonth(new Date(1980, 11, 4));
    expect(value.year).toBe(1981);
    expect(value.month).toBe(0);
  });
});
