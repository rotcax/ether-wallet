import * as StorageService from './storage';
import { Recents } from '../constants';

export const loadRecentAddresses = async () => {
  const recents = await StorageService.getItem(Recents.STORAGE_KEY);
  return recents ? JSON.parse(recents) : [];
}

export const saveRecentAddresses = recents => {
  return StorageService.setItem(recents.STORAGE_KEY, JSON.stringify(recents));
}

export const removeRecentAddresses = () => {
  return StorageService.deleteItem(Recents.STORAGE_KEY);
}
