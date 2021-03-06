import isValidNumber from './isValidNumber';

describe('Components:Form:modules:isValidNumber', () => {
  it('default', () => {
    const value = isValidNumber('', {}, {});
    expect(value).toEqual(true);
  });

  it('using an incorrect value', () => {
    let value = isValidNumber('111', { minChar: 4, maxChar: 10 });
    expect(value).toEqual(false);

    value = isValidNumber('111222', { minChar: 10, maxChar: 10 });
    expect(value).toEqual(false);

    value = isValidNumber('a', { minChar: 2, maxChar: 10 });
    expect(value).toEqual(false);
  });

  it('using a correct value', () => {
    let value = isValidNumber('111222333', { minChar: 2 });
    expect(value).toEqual(true);

    value = isValidNumber('1122233', { minChar: 6, maxChar: 10 });
    expect(value).toEqual(true);

    value = isValidNumber('111222333', { minChar: 2, maxChar: 10 });
    expect(value).toEqual(true);

    value = isValidNumber('111222333', { minChar: 3, maxChar: 10 });
    expect(value).toEqual(true);

    value = isValidNumber('0111222333', { minChar: 10, maxChar: 10 });
    expect(value).toEqual(true);
  });
});
