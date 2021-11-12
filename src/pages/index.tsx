import React from 'react';
import { Box, chakra } from '@chakra-ui/react';
import { getAllPosts } from 'src/lib/api';
import Post from 'src/types/post';
import Layout from 'src/components/layout';
import Hero from 'src/components/hero';
import SEO from 'src/components/seo';

type Props = {
  allPosts: Post[];
};

export default function Home({ allPosts }: Props) {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        {/* <Box>
        <chakra.h1 color="tomato">Hello World!</chakra.h1>
      </Box>
      <ul>
        {allPosts.map((post) => {
          return (
            <li key={post.slug}>
              <p>{post.title}</p>
              <p>{post.date}</p>
            </li>
          );
        })}
      </ul> */}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: { allPosts },
  };
};
