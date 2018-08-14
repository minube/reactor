import deviceEntropy, { connection } from './entropy';
import AsyncStore from './AsyncStore';
import PKG from '../../../package.json';

const sha256 = require('hash.js/lib/hash/sha/256');

const STORE_FINGERPRINT = `${PKG.name}:fingerprint`;

export default async () => {
  let fingerprint = await AsyncStore.getItem(STORE_FINGERPRINT);

  if (!fingerprint) {
    const connectionEntropy = await connection();

    const entropy = {
      ...deviceEntropy,
      ...connectionEntropy,
      random: Math.floor(Math.random() * (2 ** 32)),
      timestamp: new Date().getTime(),
    };
    fingerprint = sha256()
      .update(Object.values(entropy).join('-'))
      .digest('hex');

    await AsyncStore.setItem(STORE_FINGERPRINT, fingerprint);
  }

  return fingerprint;
};
