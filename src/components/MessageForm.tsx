import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Form, ButtonToolbar, Button } from 'rsuite'
import { getWeb3 } from '../utils/web3React'

declare let window: any

const MessageForm = () => {
  const web3 = getWeb3()

  const [formData, setFormData] = useState({
    message: '',
    to: ''
  })

  const handleSendMessage = async () => {
    const { message, to } = formData
    
    if (message.length === 0) {
      console.log('Missing message')
      return
    }
    
    const isValidAddress = web3.utils.isAddress(to)
    if (!isValidAddress) {
      console.log('Invalid address')
      return
    }

    try {
      if (!window.ethereum) {
        console.log('Wallet not found')
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const singer = provider.getSigner()
      const tx = await singer.sendTransaction({
        to: to,
        value: 0,
        data: web3.utils.toHex(message)
      })
      console.log(tx)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Form
      style={{ marginTop: 30 }}
      layout='horizontal'
      onChange={(data) => setFormData({ message: data.message, to: data.to })}
    >
      <Form.Group>
        <Form.Control name='message' placeholder='Message...' />
      </Form.Group>
      <Form.Group>
        <Form.Control name='to' placeholder='To 0x...' />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar style={{ paddingLeft: 0 }}>
          <Button appearance='primary' onClick={() => handleSendMessage()}>
            Send
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  )
}

export default MessageForm
