import { useWeb3React } from '@web3-react/core'
import React from 'react'
import AddBSCNetworkButton from './components/AddNetworkButton'
import ConnectWalletButton from './components/ConnectWalletButton'
import MessageForm from './components/MessageForm'
import WalletInfo from './components/WalletInfo'
import './style/App.css'

const App: React.FC = () => {
  const { active, account } = useWeb3React()

  return (
    <div className="App">
      <div className="App-header">
        {
          !active
            ? (
              <>
                <ConnectWalletButton />
                <AddBSCNetworkButton />
              </>
            )
            : (
              <>
                <WalletInfo account={account} />
                <MessageForm />
              </>
            )
        }
      </div>
    </div>
  )
}

export default App
