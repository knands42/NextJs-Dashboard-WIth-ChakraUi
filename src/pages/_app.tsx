import { AppProps } from 'next/app'
import { makeServer } from 'services/miraje'

import { Context } from '../contexts'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
