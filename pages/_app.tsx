import { AppProps } from 'next/app';
import '@/styles/globals.css';
import lockPageTitle from '@/utils/lockPageTitle';
import { DefaultHead } from '@/components/seo';

function MyApp({ Component, pageProps }: AppProps) {
  lockPageTitle();
  return (
    <>
      <DefaultHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
