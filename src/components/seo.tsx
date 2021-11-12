import React from 'react';
import Head from 'next/head';

const SEO = ({
  title = 'KAMA Hiroki: Portfolio',
  description = `I'm (Web, Flutter) Application Developer.`,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:creator" content="@viscosenpai" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
  </Head>
);

export default SEO;
