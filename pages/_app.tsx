import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import AdminLayout from '../component/AdminLayout';
import Layout from '../component/Layout';
import { globalStyleSheet } from '../util/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const user = useState();

  if (router.asPath.startsWith('/admin')) {
    return (
      <>
        <Global styles={globalStyleSheet} />
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </>
    );
  } else if (
    router.asPath === '/login' ||
    router.asPath === '/register' ||
    router.asPath === '/'
  ) {
    return (
      <>
        <Global styles={globalStyleSheet} />
        <Component {...pageProps} />
      </>
    );
  } else {
    return (
      <>
        <Global styles={globalStyleSheet} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
export default MyApp;
