import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../index.css';
import { SiteSchema } from '../components/seo/SiteSchema';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Head>
      <SiteSchema />
      <Component {...pageProps} />
    </>
  );
}
