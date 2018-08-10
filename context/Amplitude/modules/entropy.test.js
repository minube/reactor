import entropy, { connection } from './entropy';

const ENTROPY_KEYS = [
  'platform',
  'environment',
  'width',
  'height',
  'pixelRatio',
  'fontScale',
  'locale',
  'totalMemory',
  'userAgent',
  'vendor',
]

describe('entropy', () => {
  it('default', () => {
    expect(Object.keys(entropy)).toEqual(ENTROPY_KEYS);
    expect(entropy.platform).toEqual('ios');
    expect(entropy.environment).toEqual('native');
    expect(entropy.width).toEqual(750);
    expect(entropy.height).toEqual(1334);
    expect(entropy.pixelRatio).toEqual(2);
    expect(entropy.fontScale).toEqual(2);
    expect(entropy.locale).toBeUndefined();
    expect(entropy.totalMemory).toBeUndefined()
    expect(entropy.userAgent).toBeUndefined()
    expect(entropy.vendor).toBeUndefined()
  });

  it('connection entrophy', async () => {
    expect.assertions(3);
    const deviceEntropy = await connection();
    expect(Object.keys(deviceEntropy)).toEqual(['effectiveType', 'type']);
    expect(deviceEntropy.effectiveType).toBeUndefined();
    expect(deviceEntropy.type).toBeUndefined();
  });
});
