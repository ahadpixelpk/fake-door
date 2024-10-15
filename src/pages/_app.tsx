import { AppProps } from "next/app";
import { QueryProvider } from "../provider/QueryProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/fakedoor.ico" />
      </Head>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </>
  );
}

export default MyApp;
