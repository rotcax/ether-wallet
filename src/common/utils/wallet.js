import { ethers } from 'ethers';

const { HDNode, utils, Wallet } = ethers;

const network = 'rinkeby';

const PROVIDER = ethers.getDefaultProvider(network);

export const generateMnemonics = () => {
  return HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' ');
}

export const loadWalletFromMnemonics = mnemonics => {
  if(!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
    throw new Error('invalid mnemonic');
  else if(mnemonics instanceof Array)
    mnemonics = mnemonics.join(' ');

  const wallet = Wallet.fromMnemonic(mnemonics);
  wallet.provider = PROVIDER;

  return wallet;
}

export const loadWalletFromPrivateKey = pk => {
  try {
    if(pk.indexOf('0x') !== 0) pk = `0x${pk}`;
    return new Wallet(pk, PROVIDER);
  } catch(e) {
    throw new Error('invalid private key');
  }
}

export const formatBalance = balance => {
  return utils.formatEther(balance);
}

export const reduceBigNumbers = items => {
  if(!(items instanceof Array)) throw new Error('The input is not an Array');
  return items.reduce((prev, next) => prev.add(next), utils.bigNumberify('0'));
}

export const calculateFee = ({ gasUsed, gasPrice }) => {
  return gasUsed * Number(formatBalance(gasPrice));
}

export const estimateFee = ({ gasLimit, gasPrice }) => {
  return utils.bigNumberify(String(gasLimit)).mul(String(gasPrice));
}
