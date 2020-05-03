import * as StorageService from './storage';
import { Wallet } from '../constants';

export const loadWalletPKs = async () => {
  const pks = await StorageService.getItem(Wallet.STORAGE_KEY);
  return pks ? JSON.parse(pks) : [];
}

export const saveWalletPKs = async wallets => {
  const map = wallets.map(({ description, name, privateKey }) => ({ description, name, privateKey }));
  await StorageService.setItem(Wallet.STORAGE_KEY, JSON.stringify(map));
}

export const deleteWalletPKs = () => {
  return StorageService.deleteItem(Wallet.STORAGE_KEY);
}
