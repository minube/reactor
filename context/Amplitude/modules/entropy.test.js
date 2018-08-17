import entropy, { connection } from './entropy';

const ENTROPY_KEYS = [
  'browserName',
  'browserVersion',
  'deviceModel',
  'height',
  'fontScale',
  'locale',
  'osName',
  'osVersion',
  'pixelRatio',
  'totalMemory',
  'userAgent',
  'width',
]

describe('entropy', () => {
  it('default', () => {
    expect(Object.keys(entropy)).toEqual(ENTROPY_KEYS);
    expect(entropy.browserName).toBeUndefined();
    expect(entropy.browserVersion).toBeUndefined();
    expect(entropy.deviceModel).toBeUndefined();
    expect(entropy.height).toEqual(1334);
    expect(entropy.fontScale).toEqual(2);
    expect(entropy.locale).toBeUndefined();
    expect(entropy.osName).toEqual('ios');
    expect(entropy.osVersion).toBeUndefined();
    expect(entropy.pixelRatio).toEqual(2);
    expect(entropy.totalMemory).toBeUndefined()
    expect(entropy.userAgent).toBeUndefined()
    expect(entropy.width).toEqual(750);
  });

  it('connection entrophy', async () => {
    expect.assertions(3);
    const deviceEntropy = await connection();
    expect(Object.keys(deviceEntropy)).toEqual(['effectiveType', 'type']);
    expect(deviceEntropy.effectiveType).toBeUndefined();
    expect(deviceEntropy.type).toBeUndefined();
  });
});
