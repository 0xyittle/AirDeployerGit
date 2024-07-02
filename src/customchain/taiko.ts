// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const taiko = /*#__PURE__*/ defineChain({
  id: 167000,
  name: 'Taiko Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.mainnet.taiko.xyz	'],
    },
  },
  blockExplorers: {
    default: {
      name: 'taikoscan',
      url: 'https://taikoscan.io/',
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
