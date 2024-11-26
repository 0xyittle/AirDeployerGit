import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import {
  cookieStorage,
  createStorage,
  createConfig,
  http,
  webSocket,
} from "wagmi";
import {
  arbitrum,
  base,
  mode,
  optimism,
  zora,
  blast,
  fraxtal,
  cyber,
  redstone,
  scroll,
  linea,
  ancient8,
  kroma,
  bitkub
} from "wagmi/chains";
import { injected, coinbaseWallet, walletConnect } from "wagmi/connectors";
import { mintMainnet } from "@/customchain/mint";
import { berachainTestnet } from "@/customchain/bera";
import { taiko } from "@/customchain/taiko";
import { soneium } from "@/customchain/soneium";
import { abstract } from "@/customchain/abstract";

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
export const config = createConfig({
  chains: [
    optimism,
    base,
    zora,
    mode,
    blast,
    arbitrum,
    cyber,
    berachainTestnet,
    mintMainnet,
    redstone,
    fraxtal,
    // ,taiko
    // ,linea
    // scroll,
    ancient8,
    kroma,
    soneium,
    abstract,
    bitkub,
  ],
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
    [redstone.id]: http(),
    [fraxtal.id]: http(),
    // [taiko.id]: http(),
    // [linea.id]: http(),
    // [scroll.id]: http(),
    [ancient8.id]: http(),
    [kroma.id]: http(),
    [soneium.id]: http(),
    [abstract.id]: http(),
    [bitkub.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
