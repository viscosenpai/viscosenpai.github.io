import { Box, chakra } from '@chakra-ui/react';
import React from 'react';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

export default function Home({ allPosts }: Props) {
  return (
    <>
      <Box>
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
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: { allPosts },
  };
};
