import format from './format';

const amount = 10.95;
const currency = 'Eur';

describe('format()', () => {
  it('default', () => {
    const value = format();
    expect(value).toEqual('0');
  });

  it('including amount', () => {
    const value = format({ amount });
    expect(value).toEqual('10,95');
  });

  it('including currency', () => {
    const value = format({ amount, currency });
    expect(value).toEqual('Eur 10,95');
  });

  it('including fixed(4)', () => {
    const value = format({ amount, fixed: 4 });
    expect(value).toEqual('10,9500');
  });

  it('including symbol (left)', () => {
    const value = format({ amount, symbol: '$' });
    expect(value).toEqual('$10,95');
  });

  it('including symbol (right)', () => {
    const value = format({ amount, symbol: '€' });
    expect(value).toEqual('10,95€');
  });

  it('including symbol over currency', () => {
    const value = format({ amount, currency, symbol: '€' });
    expect(value).toEqual('10,95€');
  });
});
