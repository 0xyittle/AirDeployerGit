import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage, createConfig, http , webSocket} from 'wagmi'
import { arbitrum, base, mode, optimism, zora, blast, berachainTestnet, cyber, redstone } from 'wagmi/chains'
import { injected, coinbaseWallet, walletConnect } from 'wagmi/connectors' 
import { mintMainnet  } from '@/customchain/mint'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
export const config = createConfig({
  chains: [optimism, base, zora, mode, blast, arbitrum, berachainTestnet, cyber, mintMainnet, redstone],
  transports: {
    [optimism.id]: http(),
    [base.id]: http(),
    [zora.id]: http(),
    [mode.id]: http(),
    [blast.id]: http(),
    [arbitrum.id]: http(),
    [berachainTestnet.id]: http(),
    [cyber.id]: http(),
    [mintMainnet.id]: http(),
    [redstone.id]: http()
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    })
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})
