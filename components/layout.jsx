import Head from "next/head";

import Nav from "./nav";
import Footer from "./footer";
import { Container } from "../styles/global.css";

export default function Layout({ children, router }) {
    return <>
        <Head>
            <title>HealingCreativeStudio</title>
        </Head>
        <Nav path={router.asPath} />
            <Container>
            {children}
            </Container>
        <Footer path={router.asPath} />
    </>
}