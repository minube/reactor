import AsyncStore from './AsyncStore';

const STORE_KEY = 'reactor';
const STORE_VALUE = { hello: 'world' };

describe('AsyncStore', () => {
  it('default', () => {
    expect(AsyncStore).toBeDefined();
    expect(AsyncStore.getItem).toBeDefined();
    expect(AsyncStore.setItem).toBeDefined();
  });

  it('methods setItem', async () => {
    expect.assertions(1);
    const value = await AsyncStore.setItem(STORE_KEY, STORE_VALUE);
    expect(value).toBeUndefined(); // JEST don't have access to storage
    // await expect(AsyncStore.getItem(STORE_KEY)).resolves.toEqual(STORE_VALUE);
  });

  it('method getItem', async () => {
    expect.assertions(1);
    const value = await AsyncStore.getItem(STORE_KEY)
    expect(value).toEqual(null); // JEST don't have access to storage
  });
});
