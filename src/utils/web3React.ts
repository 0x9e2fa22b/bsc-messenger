import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [56, 97]
})

export const getLibrary = (provider: any) => {
  return new Web3(provider)
}

export const getWeb3 = () => {
  const provider = process.env.REACT_APP_CHAIN_ID === '56'
    ? process.env.REACT_APP_BSC_NODE_MAINNET
    : process.env.REACT_APP_BSC_NODE_TESTNET

  return getLibrary(provider)
}
