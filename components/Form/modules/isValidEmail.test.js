import isValidEmail from './isValidEmail';

describe('Components:Form:modules:isValidEmail', () => {
  it('default', () => {
    const value = isValidEmail();
    expect(value).toEqual(true);
  });

  it('using an incorrect value', () => {
    let value = isValidEmail('a');
    expect(value).toEqual(false);

    value = isValidEmail('a@');
    expect(value).toEqual(false);

    value = isValidEmail('a@a');
    expect(value).toEqual(false);

    value = isValidEmail('a@a.');
    expect(value).toEqual(false);

    value = isValidEmail('a@.com');
    expect(value).toEqual(false);

    value = isValidEmail('a@a.a');
    expect(value).toEqual(false);
  });

  it('using an correct value', () => {
    let value = isValidEmail('a@a.com');
    expect(value).toEqual(true);

    value = isValidEmail('a@1.com');
    expect(value).toEqual(true);

    value = isValidEmail('a+1@a.com');
    expect(value).toEqual(true);
  });
});
