// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const mintMainnet = /*#__PURE__*/ defineChain({
  id: 185,
  name: 'Mint Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://global.rpc.mintchain.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://explorer.mintchain.io/',
    //   apiUrl: 'https://cyberscan.co/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 0,
    },
  },
})
