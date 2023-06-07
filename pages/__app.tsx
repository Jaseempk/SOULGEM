import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

import { extendTheme } from "@chakra-ui/react"
import WalletContextProvider from "../components/WalletContextProvider"

const colors = {
    background: "#0D0E33",
    accent: "#007BFF",
    bodyText: "rgba(255, 255, 255, 0.75)",
  };

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <WalletContextProvider>
        <Component {...pageProps} />
        </WalletContextProvider>
    </ChakraProvider>
  )
}

export default MyApp