import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { Context } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Context>
  )
}

export default MyApp
