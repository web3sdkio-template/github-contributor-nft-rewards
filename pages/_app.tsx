import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/globals.css";

const activeChainId = ChainId.Goerli;

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <Web3sdkioProvider
      desiredChainId={activeChainId}
      authConfig={{
        authUrl: "/api/web3sdkioauth",
        domain: "example.com",
        loginRedirect: "/",
      }}
    >
      <SessionProvider session={session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </Web3sdkioProvider>
  );
};

export default MyApp;
