import React from 'react';
import Layout from 'src/components/layout';
import Hero from 'src/components/hero';
import SEO from 'src/components/seo';

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
