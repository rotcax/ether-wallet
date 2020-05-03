import * as SecureStore from 'expo-secure-store';
import { Storage } from '../constants';

export const getItem = key => {
  return SecureStore.getItemAsync(key, Storage.CONFIG).then(item => item || '');
}

export const setItem = (key, value) => {
  return SecureStore.setItemAsync(key, value || '', Storage.CONFIG);
}

export const deleteItem = key => {
  return SecureStore.deleteItemAsync(key, Storage.CONFIG);
}
