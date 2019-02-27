import consolidate from './consolidate';

const attributes = {
  username: { defaultValue: 'soyjavi', required: true },
  password: { required: true },
}
// const onChange = jest.fn(value => value);

describe('Components:Form:modules:consolidate', () => {
  it('default', () => {
    const value = consolidate();

    expect(value).toEqual(undefined);
  });

  it('when value does not have the defaultValue', () => {
    const onChange = jest.fn(value => value);
    let value = consolidate({ attributes, value: {}, onChange });

    expect(value).toEqual(undefined);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.results[0].value.username).toBe('soyjavi');
  });

  it('when value already has the defaultValue', () => {
    const onChange = jest.fn(value => value);
    let value = consolidate({ attributes, value: { username: 'soyjavi' }, onChange });

    expect(value).toEqual(undefined);
    expect(onChange.mock.calls.length).toBe(0);
  });
});
