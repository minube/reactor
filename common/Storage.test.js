import Storage from './Storage';

const STORE_KEY = 'reactor';
const STORE_VALUE = { hello: 'world' };

describe('Storage', () => {
  it('default', () => {
    expect(Storage).toBeDefined();
    expect(Storage.get).toBeDefined();
    expect(Storage.set).toBeDefined();
  });

  it('methods set', async () => {
    expect.assertions(1);
    const value = await Storage.set(STORE_KEY, STORE_VALUE);
    expect(value).toBeUndefined(); // JEST don't have access to storage
    // await expect(Storage.get(STORE_KEY)).resolves.toEqual(STORE_VALUE);
  });

  it('method get', async () => {
    expect.assertions(1);
    const value = await Storage.get(STORE_KEY)
    expect(value).toEqual(undefined); // JEST don't have access to storage
  });
});
