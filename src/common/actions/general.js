import Toast from 'react-native-root-toast';
import { Recents as RecentsService, Wallets as WalletsService } from '../services';
import * as store from '../stores';

export const notify = async (title, duration, driver = Toast) => {
  switch(duration) {
    case 'long':
      duration = driver.durations.LONG;
    break;

    case 'short':
    default:
      duration = driver.durations.SHORT;
    break;
  }

  driver.show(title, { duration });
}

export const eraseAllData = async () => {
  await cleanStorage();
  cleanStores();
}

const cleanStorage = () => {
  return [
    RecentsService.removeRecentAddresses(),
    WalletsService.deleteWalletPKs()
  ]
}

const cleanStores = () => {
  store.prices.reset();
  store.recents.reset();
  store.wallet.reset();
  store.wallets.reset();
}
