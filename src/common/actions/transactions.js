import { ethers } from 'ethers';
import { notify } from './general';
import { wallet as WalletStore } from '../stores';
import { Transactions as TransactionsService } from '../services';

const waitForTransaction = async (wallet, txn) => {
  await wallet.provider.waitForTransaction(txn.hash);
  WalletStore.moveToHistory(txn);
  notify('Transaction confirmed');
}

export const sendEther = async (wallet, destination, amount, options) => {
  const txn = await TransactionsService.sendEther(wallet, destination, amount, options);
  WalletStore.addPendingTransaction(txn);
  waitForTransaction(wallet, txn);

  return txn;
}

export const sendTransaction = async (wallet, txn) => {
  if(!(wallet instanceof ethers.Wallet)) throw new Error('Invalid wallet');
  txn = await TransactionsService.sendTransaction(wallet, txn);
  waitForTransaction(wallet, txn);

  return txn;
}
