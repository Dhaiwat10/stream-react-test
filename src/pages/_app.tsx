import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Provider from 'streamr-client-react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider
      auth={{
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY as string, // BAD, DONT USE IN PROD
      }}
    >
      <Component {...pageProps} />
    </Provider>
  );
}
