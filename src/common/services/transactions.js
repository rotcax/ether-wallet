import { ethers } from 'ethers'
import { Transaction as TransactionUtils } from '../utils'

const { Wallet, utils } = ethers

export const sendTransaction = (wallet, transaction) => {
  if(!(wallet instanceof Wallet)) throw new Error('Invalid wallet')
  if(!TransactionUtils.isValidTransaction(transaction)) throw new Error('Invalid transaction')

  return wallet.sendTransaction(transaction)
}

export const sendEther = (wallet, destination, amount, options) => {
  if(!(wallet instanceof Wallet)) throw new Error('Invalid wallet')
  if(typeof destination !== 'string') throw new Error('Invalid destination address')
  if(!(amount instanceof utils.BigNumber)) amount = utils.parseEther(amount)

  return wallet.send(destination, amount, options)
}
