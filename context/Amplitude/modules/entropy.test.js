import entropy, { connection } from './entropy';

const ENTROPY_KEYS = [
  'deviceModel',
  'environment',
  'height',
  'fontScale',
  'locale',
  'osName',
  'osVersion',
  'pixelRatio',
  'platform',
  'totalMemory',
  'userAgent',
  'width',
]

describe('entropy', () => {
  it('default', () => {
    expect(Object.keys(entropy)).toEqual(ENTROPY_KEYS);
    expect(entropy.deviceModel).toBeUndefined();
    expect(entropy.environment).toEqual('native');
    expect(entropy.height).toEqual(1334);
    expect(entropy.fontScale).toEqual(2);
    expect(entropy.locale).toBeUndefined();
    expect(entropy.osName).toEqual('ios');
    expect(entropy.osVersion).toBeUndefined();
    expect(entropy.pixelRatio).toEqual(2);
    expect(entropy.platform).toEqual('ios');
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
