// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const soneium = /*#__PURE__*/ defineChain({
  id: 1946,
  name: 'Soneium Minato Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://rpc.minato.soneium.org/'] },
  },
  blockExplorers: {
    default: {
      name: 'Soneium Minato Explorer',
      url: 'https://explorer-testnet.soneium.org/',
    },
  },
  testnet: true,
})
