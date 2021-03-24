import { wallet as WalletStore, wallets as WalletsStore } from '../stores';
import { Wallets as WalletsService, Api as ApiService } from '../services';
import { Wallet as WalletUtils } from '../utils';

export const addWallet = async (walletName, wallet, walletDescription = '') => {
  WalletsStore.isLoading(true);
  WalletsStore.addWallet(walletName, wallet, walletDescription);
  WalletsStore.isLoading(false);
}

export const loadWallets = async () => {
  WalletStore.isLoading(true);

  const pks = await WalletsService.loadWalletPKs();
  pks.map(({ description, name, privateKey }) => {
    const wallet = WalletUtils.loadWalletFromPrivateKey(privateKey);
    WalletsStore.addWallet(name, wallet, description);
  });

  WalletsStore.isLoading(false);
}

export const updateBalance = async wallet => {
  const balance = await wallet.getBalance();
  WalletsStore.setBalance(wallet.getAddress(), balance);
}

export const removeWallet = async wallet => {
  WalletsStore.removeWallet(wallet);
}

export const saveWallets = async () => {
  await WalletsService.saveWalletPKs(WalletsStore.list);
}

export const selectWallet = async wallet => {
  WalletStore.select(wallet);
}

export const updateHistory = async wallet => {
  WalletStore.isLoading(true);

  const { data } = await ApiService.getHistory(wallet.getAddress());
  if(data.status == 1) WalletStore.setHistory(data.result);

  WalletStore.isLoading(false);
}
