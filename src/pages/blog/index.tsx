import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/layout';
import { getAllPosts } from 'src/lib/api';
import Post from 'src/types/post';
import SEO from 'src/components/seo';
import Layout from 'src/components/layout';
import PageHeader from 'src/components/pageHeader';
import MarkerHeader from 'src/components/markerHeader';
import { chakra } from '@chakra-ui/system';
import { Props } from 'framer-motion/types/types';

type PostProps = {
  allPosts: Post[];
};

const ArticleInformation: FC<Props> = (props) => (
  <chakra.h4 display="inline" fontWeight="bold" {...props} />
);

const Blog = ({ allPosts }: PostProps) => {
  return (
    <>
      <SEO
        title="articles | KAMA Hiroki: Portfolio"
        description="Technology, Journal, Essay."
      />
      <Layout>
        <Box mx="auto" my="0" maxW="890px" px="1.5rem" py="1rem">
          <PageHeader>Blog</PageHeader>
          {allPosts.map((post) => {
            return (
              <Box key={post.slug}>
                <Link
                  href={post.path}
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                >
                  <MarkerHeader>{post.title}</MarkerHeader>
                </Link>
                <Box mb="1.5rem">
                  <ArticleInformation>{post.date}</ArticleInformation>
                  <ArticleInformation>
                    {' '}
                    - {post.readTime} min read
                  </ArticleInformation>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'path',
    'slug',
    'draft',
    'readTime',
  ]);

  return {
    props: { allPosts },
  };
};

export default Blog;
