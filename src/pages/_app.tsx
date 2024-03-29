import * as React from 'react';
import '../styles/globals.css';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import NextProgress from 'next-progress';
import CountryContextProvider from '../components/CountryContext/CountryContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = React.useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <CountryContextProvider countries={pageProps.countries}>
        <NextProgress delay={300} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </CountryContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export function reportWebVitals({ id, name, label, value, startTime }: any) {
  const body = JSON.stringify({
    id,
    name,
    label,
    value,
    startTime,
    url: `${Router.asPath}`,
  });
  const url = '/api/createWebVital';

  fetch(url, {
    body: body,
    method: 'POST',
    keepalive: true,
    headers: {
      'Content-type': 'application/json',
    },
  });
}

export default MyApp;
