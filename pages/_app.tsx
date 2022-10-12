import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Layout from "../src/components/layout/Layout";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>Wine Commerce</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
}

export default MyApp