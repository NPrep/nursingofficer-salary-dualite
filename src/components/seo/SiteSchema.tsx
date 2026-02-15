import React from 'react';
import Head from 'next/head';
import { site } from '../../next/site';

export const SiteSchema: React.FC = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "url": site.url,
    "logo": `${site.url}${site.logoPath}`,
    "email": site.email
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.name,
    "url": site.url
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </Head>
  );
};
