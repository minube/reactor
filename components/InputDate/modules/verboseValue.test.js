import verboseValue from './verboseValue';

const DATE = new Date(1980, 3, 10, 8, 0);
const LOCALE = {
  MONTHS: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ],
};

describe('verboseValue()', () => {
  it('default', () => {
    let value = verboseValue();
    expect(value).toBe(undefined);
  });

  it('pass a date', () => {
    let value = verboseValue(DATE);
    expect(value).toBe('10 apr. 1980');
  });

  it('pass a locale', () => {
    let value = verboseValue(DATE, LOCALE);
    expect(value).toBe('10 abr. 1980');
  });
});
