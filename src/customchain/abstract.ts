// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const abstract = /*#__PURE__*/ defineChain({
  id: 11124,
  name: 'Abstract Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://api.testnet.abs.xyz/'] },
  },
  blockExplorers: {
    default: {
      name: 'Abstract Explorer',
      url: 'https://sepolia.abscan.org/',
    },
  },
  testnet: true,
})
