import { Api as ApiService } from '../services';
import { prices as PricesStore } from '../stores';

export const getPrice = async () => {
  PricesStore.isLoading(true);

  const { data } = await ApiService.getPrice();
  PricesStore.setUSDRate(data.USD);
  PricesStore.setEURRate(data.EUR);
  PricesStore.setJMDRate(data.JMD);

  PricesStore.isLoading(false);
}
