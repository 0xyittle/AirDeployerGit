import './globals.css'
import { Suspense } from 'react'
import { ConfigProvider } from 'antd'
import { COLOR } from '../utils/constants'
import { darkAlgorithm } from "../lib/darktheme"
import { AntdRegistry } from "@ant-design/nextjs-registry"

import type { Metadata } from 'next'
// import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from "../lib/config"
import Web3ModalProvider from "../lib/context"

export const metadata: Metadata = {
  title: 'AirDeployer',
  // description: 'Multi-chain minting dapp suitable for onchain builders.'
  
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  // const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en">
      <body>
      <AntdRegistry>
        <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
          hashed: false,
          token: {
            colorBgBase: COLOR.BG_COLOR,
            colorBgContainer: COLOR.BG_COLOR,
            colorBgLayout: COLOR.BG_COLOR,
            colorText: COLOR.DEFAULT_TEXT_COLOR,
          },

          components: {
            Layout: {
              headerBg: COLOR.TRANSPARENT,
            },
            Menu: {
              darkItemBg: COLOR.BG_COLOR,
              darkItemSelectedBg: COLOR.TRANSPARENT,
              darkItemHoverBg: COLOR.TRANSPARENT,
              darkItemColor: COLOR.DEFAULT_TEXT_COLOR,
              darkItemDisabledColor: COLOR.TEXT_COLOR_DISABLED,
            },
            Select: {
              colorBorder: COLOR.TRANSPARENT,
              colorBgContainer: COLOR.DEFAULT_BG_COLOR,
              colorPrimaryHover: COLOR.DEFAULT_BG_COLOR,
              colorPrimaryActive: COLOR.DEFAULT_BG_COLOR,
            },
            Input: {
              colorBorder: COLOR.DEFAULT_BG_COLOR,
              colorBgContainer: COLOR.DEFAULT_BG_COLOR,
              hoverBorderColor: COLOR.DEFAULT_BG_COLOR,
              activeBorderColor: COLOR.DEFAULT_BG_COLOR,
            },
            Modal: {
              contentBg: COLOR.BG_COLOR,
              footerBg: COLOR.BG_COLOR,
              headerBg: COLOR.BG_COLOR,
            },
            Card: {
              colorBorderSecondary: COLOR.DEFAULT_BG_COLOR,
            }
          },
        }}
        >

          {/* <Web3ModalProvider initialState={initialState}> */}
          <Web3ModalProvider>
            <Suspense>
                  {children}
            </Suspense>
          </Web3ModalProvider>
        </ConfigProvider>
      </AntdRegistry>
      </body>
    </html>
  )
}