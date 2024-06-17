'use client'

import React, { ReactNode } from 'react'
import { config, projectId } from './config'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chainImages: {
    34443: 'https://pbs.twimg.com/profile_images/1688569679877390338/IYXD4bdy_400x400.jpg', // MODE
    81457: 'https://pbs.twimg.com/profile_images/1726739354700173312/OeT9Ef1J_400x400.jpg', // BLAST
    185: 'https://pbs.twimg.com/profile_images/1783320986093588480/uhUB3xKT_400x400.jpg', // MINT Mainnet
    690: 'https://pbs.twimg.com/profile_images/1724553277147131904/cdma6E3g_400x400.jpg', //redstone
    7560: 'https://pbs.twimg.com/profile_images/1790617734281154560/MqaxhdzZ_400x400.jpg' // cyber
  },
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  themeVariables: {
    '--w3m-z-index'	: 1001,
    '--w3m-accent' : '#101010',
  }
})

export default function Web3ModalProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    </WagmiProvider>
  )
}