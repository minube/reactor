import deviceEntropy, { connection } from './entropy';
import AsyncStore from './AsyncStore';
import UUID from './UUID';
import PKG from '../../../package.json';

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
    fingerprint = UUID(Object.values(entropy).join('-'));

    await AsyncStore.setItem(STORE_FINGERPRINT, fingerprint);
  }

  return fingerprint;
};
