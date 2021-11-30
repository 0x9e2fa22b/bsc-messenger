import { useWeb3React } from '@web3-react/core'
import { useState, useEffect } from 'react'
import { getWeb3 } from '../utils/web3React'

const useWalletBalance = () => {
  const web3 = getWeb3()
  const { account } = useWeb3React()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const fetchBalance = async () => {
      const walletBalance = await web3.eth.getBalance(account as string)
      setBalance(Number(walletBalance))
    }

    if (account) {
      fetchBalance()
    }
  }, [account, setBalance, web3])

  return { balance }
}

export default useWalletBalance
