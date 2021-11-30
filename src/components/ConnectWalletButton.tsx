import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button } from 'rsuite'
import { injected } from '../utils/web3React'

const ConnectWalletButton: React.FC = () => {
  const { activate } = useWeb3React()

  const connect = async () => {
    try {
      await activate(injected)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Button appearance='primary' onClick={connect} >
      Connect to Metamask
    </Button>
  )
}

export default ConnectWalletButton
