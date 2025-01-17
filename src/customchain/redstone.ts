// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const redstone = /*#__PURE__*/ defineChain({
  id: 690,
  name: 'RedStone',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.redstonechain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'redstoneexplorer',
      url: 'https://explorer.redstone.xyz/',
      apiUrl: 'https://explorer.redstone.xyz/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 0,
    },
  },
})
