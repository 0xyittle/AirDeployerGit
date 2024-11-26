"use client";

import React, { ReactNode } from "react";
import { config, projectId } from "./config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chainImages: {
    34443: "https://pbs.twimg.com/profile_images/1688569679877390338/IYXD4bdy_400x400.jpg", // MODE
    81457: "https://chainbroker.io/_next/image/?url=https%3A%2F%2Fstatic.chainbroker.io%2Fmediafiles%2Fprojects%2Fblast%2Fblast.jpeg&w=2560&q=75", // BLAST
    185: "https://pbs.twimg.com/profile_images/1783320986093588480/uhUB3xKT_400x400.jpg", // MINT Mainnet
    690: "https://pbs.twimg.com/profile_images/1724553277147131904/cdma6E3g_400x400.jpg", //redstone
    7560: "https://pbs.twimg.com/profile_images/1790617734281154560/MqaxhdzZ_400x400.jpg", // cyber
    252: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxrAqkyM1Zz-pgjDtYZawqPdEEEcUXZjL9g&s", // fraxtal
    80084: "https://avatars.githubusercontent.com/u/96059542?s=280&v=4", // Bera
    167000: "https://cdn.dribbble.com/userupload/7958487/file/original-1348331c2846a04355261f363fb75f0c.png?resize=1600x1200", // Taiko
    59144: "https://images.seeklogo.com/logo-png/52/1/linea-logo-png_seeklogo-527155.png", // Linea
    534352: "https://media.licdn.com/dms/image/D4E0BAQF6gMSNL5xYCA/company-logo_200_200/0/1692892037062/scroll_io_logo?e=2147483647&v=beta&t=H0sTCb5XBPUvt7yKUD65kYY2qN9L5dd0udOMu48PkKk", // Scroll
    888888888: "https://pbs.twimg.com/profile_images/1701848315997077504/yovD2pCX_400x400.jpg", // Ancient8
    255: "https://avatars.githubusercontent.com/u/126645000?s=280&v=4", // Kroma
    11124: "https://pbs.twimg.com/profile_images/1816175731203862528/OCtFkZbn_400x400.jpg", //Abstract Testnet
    1946: "https://i.ibb.co/51vWP7J/ujz-FVEj0-400x400.jpg", //Soneium Minato Testnet
    96: "https://play-lh.googleusercontent.com/Aj1gLby50KuAjWzptV2awDW-fbktrFtA356j2PTOhWyrKpSON3xHvUH0ycWskUwrUg" //Bitkub
  },
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  themeVariables: {
    "--w3m-z-index": 1001,
    "--w3m-accent": "#101010",
  },
});

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
