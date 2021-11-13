import { FC } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { chakra } from '@chakra-ui/system';
import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Props } from 'framer-motion/types/types';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import SEO from 'src/components/seo';
import Layout from 'src/components/layout';
import MarkerHeader from 'src/components/markerHeader';

type PostProps = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const HeaderDate: FC<Props> = (props) => (
  <chakra.h4 mt="10px" fontSize="2xl" fontWeight="bold" {...props} />
);

const createStyle = (params: {
  linkColor: string;
  linkUnderLineColor: string;
}) => styled.div`
  a {
    text-decoration: none;
    position: relative;
    background-image: ${params.linkUnderLineColor};
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    color: ${params.linkColor};
    &:hover {
      background-size: 100% 88%;
    }
  }
`;

const Post = ({ post, morePosts, preview }: PostProps) => {
  const linkColor = useColorModeValue('#202020', '#ffffff');
  const linkUnderLineColor = useColorModeValue(
    'linear-gradient( #fffa96cc, #fffa96cc)',
    'linear-gradient( #054d6ecc, #054d6ecc)'
  );
  const contentParams = {
    linkColor,
    linkUnderLineColor,
  };
  const MarkdownContent = createStyle(contentParams);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <SEO title={post.title} description="" />
      <Layout>
        <Box mx="auto" my="0" maxW="890px" px="1.5rem" py="1rem">
          <MarkerHeader fontSize="2.25rem">{post.title}</MarkerHeader>
          <HeaderDate>
            {post.date} - {post.readTime} min read.
          </HeaderDate>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </Box>
      </Layout>
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'path',
    'slug',
    'draft',
    'readTime',
    'content',
  ]);
  const content = await markdownToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
