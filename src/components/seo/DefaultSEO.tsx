import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { site } from '../../next/site';

const normalizePath = (raw: string) => {
  const path = raw.split('?')[0].split('#')[0];
  if (!path || path === '/') {
    return '/';
  }
  return path.endsWith('/') ? path : `${path}/`;
};

export const DefaultSEO: React.FC = () => {
  const router = useRouter();
  const canonicalPath = normalizePath(router.asPath || '/');
  const canonical = `${site.url}${canonicalPath}`;

  return (
    <Head>
      <title>{site.name}</title>
      <meta name="description" content={site.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={site.name} />
      <meta property="og:description" content={site.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={site.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.name} />
      <meta name="twitter:description" content={site.description} />
    </Head>
  );
};
