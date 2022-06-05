import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import Fonts from '../components/fonts'
import { GlobalStyles, theme } from '../styles/theme.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <GlobalStyles />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
