import type { AppProps } from "next/app";
import { SessionProvider } from "@/modules/auth";
import "../global.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
