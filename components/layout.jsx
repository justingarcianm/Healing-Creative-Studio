import Head from 'next/head'

import Nav from './Nav/index'
import Footer from './Footer/index'
import { Container } from '../styles/global.css'

export default function Layout({ children, router }) {
  return (
    <>
      <Head>
        <title>HealingCreativeStudio</title>
      </Head>
      <Nav path={router.asPath} />
      <Container>{children}</Container>
      <Footer path={router.asPath} />
    </>
  )
}
