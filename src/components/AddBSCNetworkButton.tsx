import React from 'react'
import { Button } from 'rsuite'

declare let window: any

const AddBSCNetworkButton: React.FC = () => {
  const addNetwork = () => {
    if (window.ethereum) {
      try {
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x38',
            chainName: 'BSC Mainnet',
            nativeCurrency: {
              name: 'Binance Coin',
              symbol: 'BNB',
              decimals: 18
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com']
          }]
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Button style={{ marginTop: 16 }} appearance='primary' onClick={addNetwork} >
      Add BSC Mainnet to Metamask
    </Button>
  )
}

export default AddBSCNetworkButton
