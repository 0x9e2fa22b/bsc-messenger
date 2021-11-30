import React from 'react'
import useWalletBalance from '../hooks/useWalletBalance'
import getBalanceNumber from '../utils/getBalanceNumber'

const WalletInfo = (props: { account: any}) => {
  const { account } = props
  const { balance } = useWalletBalance()
  
  return (
    <div>
      <p>Address: {account}</p>
      <p>Balance: {getBalanceNumber(balance)} BNB</p>
    </div>
  )
}

export default WalletInfo
