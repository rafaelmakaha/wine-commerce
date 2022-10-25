import type { AppProps } from "next/app";
import colors from "../public/colors.json";
import { createGlobalStyle } from "styled-components";
import Layout from "../src/components/layout/layout";

const GlobalStyle = createGlobalStyle`
  p {
    margin: 0;
    display: flex;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: ${colors.neutrals.light_gray};
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
