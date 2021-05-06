// Copyright © VNG Realisatie 2021
// Licensed under the EUPL
//
import Head from 'next/head'

// NOTE: Do not setup themeprovider here, if using theme file from external dependency
// _app is loaden on the backend, which is node and uses _cjs_ format
// This does not support tree-shaking, so the whole ui-library is added to every page when doing:
// import { defaultTheme } from 'ui-library'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
