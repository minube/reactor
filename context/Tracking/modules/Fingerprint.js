import { ENV, Storage } from '../../../common';
import deviceEntropy, { connection } from './entropy';
import UUID from './UUID';

const { PKG } = ENV;
const STORE_FINGERPRINT = `${PKG.name}:fingerprint`;

export default async () => {
  let fingerprint = await Storage.get(STORE_FINGERPRINT);
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

    await Storage.set(STORE_FINGERPRINT, fingerprint);
  }

  return fingerprint;
};
