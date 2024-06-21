// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const berachainTestnet = /*#__PURE__*/ defineChain({
  id: 80084,
  name: 'Berachain Bartio',
  nativeCurrency: {
    decimals: 18,
    name: 'BERA Token',
    symbol: 'BERA',
  },
  rpcUrls: {
    default: { http: ['https://bartio.rpc.berachain.com/'] },
  },
  blockExplorers: {
    default: {
      name: 'Berachain',
      url: 'https://bartio.beratrail.io',
    },
  },
  testnet: true,
})
