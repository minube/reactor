import isValidPhone from './isValidPhone';

describe('Components:Form:modules:isValidPhone', () => {
  it('default', () => {
    const value = isValidPhone();
    expect(value).toEqual(true);
  });

  it('using an incorrect value', () => {
    let value = isValidPhone('a');
    expect(value).toEqual(false);

    value = isValidPhone('111222');
    expect(value).toEqual(false);

    value = isValidPhone('111 222');
    expect(value).toEqual(false);
  });

  it('using a correct value', () => {
    let value = isValidPhone('111 222 333');
    expect(value).toEqual(true);

    value = isValidPhone('111 222 333');
    expect(value).toEqual(true);

    value = isValidPhone('111222333');
    expect(value).toEqual(true);

    value = isValidPhone('111222333');
    expect(value).toEqual(true);

    value = isValidPhone('0111 222 333');
    expect(value).toEqual(true);

    value = isValidPhone('0111 222 333');
    expect(value).toEqual(true);

    value = isValidPhone('0111222333');
    expect(value).toEqual(true);

    value = isValidPhone('0111222333');
    expect(value).toEqual(true);

    value = isValidPhone('1111 2222');
    expect(value).toEqual(true);

    value = isValidPhone('1111 2222');
    expect(value).toEqual(true);

    value = isValidPhone('11112222');
    expect(value).toEqual(true);

    value = isValidPhone('11112222');
    expect(value).toEqual(true);
  });

  it('using a correct value with countryCode', () => {
    let value = isValidPhone('+34 111 222 333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('0034 111 222 333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('+34 111222333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('0034 111222333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('+66 0111 222 333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('0066 0111 222 333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('+66 0111222333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('0066 0111222333', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('+852 1111 2222', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('00852 1111 2222', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('+852 11112222', { countryCode: true });
    expect(value).toEqual(true);

    value = isValidPhone('00852 11112222', { countryCode: true });
    expect(value).toEqual(true);
  });
});
