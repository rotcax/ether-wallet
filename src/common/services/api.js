import axios from 'axios'
import { Url } from '../constants'

export const getPrice = () => {
  return axios.get(`${Url.CRYPTO_COMPARE}/data/price?fsym=ETH&tsyms=USD,EUR,JMD`)
}

export const getHistory = address => {
  return axios.get(`${Url.ETHERSCAN}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc`)
}
