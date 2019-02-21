import deviceEntropy, { connection } from './entropy';
import AsyncStore from './AsyncStore';
import UUID from './UUID';
import PKG from '../../../package.json';

const STORE_FINGERPRINT = `${PKG.name}:fingerprint`;

export default async () => {
  let fingerprint = await AsyncStore.getItem(STORE_FINGERPRINT);
  if (typeof fingerprint === 'string') fingerprint = undefined;

  if (!fingerprint) {
    const connectionEntropy = await connection();
    const entropy = {
      ...deviceEntropy,
      ...connectionEntropy,
      random: Math.floor(Math.random() * (2 ** 32)),
      timestamp: new Date().getTime(),
    };

    const uuid = UUID(Object.values(entropy).join('-'));
    fingerprint = { uuid, device_id: UUID(uuid) };

    await AsyncStore.setItem(STORE_FINGERPRINT, fingerprint);
  }

  return fingerprint;
};
