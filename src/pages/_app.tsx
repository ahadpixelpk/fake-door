import { AppProps } from "next/app";
import { QueryProvider } from "../provider/QueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  );
}

export default MyApp;
