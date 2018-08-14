import Fingerprint from './fingerprint';

describe('Fingerprint()', () => {
  it('default', async () => {
    const fingerprint = await new Fingerprint();
    expect(fingerprint).toBeDefined();
    expect(fingerprint.length).toEqual(64);
  });
});
