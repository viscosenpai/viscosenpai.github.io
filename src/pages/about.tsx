import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { Image } from '@chakra-ui/image';
import SEO from 'src/components/seo';
import Layout from 'src/components/layout';
import PageHeader from 'src/components/pageHeader';
import MarkerHeader from 'src/components/markerHeader';
import MarkerLink from 'src/components/markerLink';

const About = () => {
  return (
    <>
      <SEO
        title="About page | KAMA Hiroki: Portfolio"
        description="Work, background, specialty."
      />
      <Layout>
        <Box mx="auto" my="0" maxW="890px" px="1.5rem" py="1rem">
          <PageHeader>About</PageHeader>
          <Flex
            mb="40px"
            justify="center"
            width="100%"
            flexDir={['column', 'row']}
          >
            <Box as="span" mt="6%" width={['100%', '40%']} textAlign="center">
              <Image src="images/profile_image.jpeg" alt="@viscosenpai" />
            </Box>
            <Box width={['100%', '60%']}>
              <MarkerHeader>Profile</MarkerHeader>
              <chakra.p mb="2.5rem" pb="2" borderBottom="1px solid gray">
                <strong>KAMA Hiroki (@viscosenpai)</strong>
                <br />
                福岡県在住の(Web, アプリケーション)エンジニア
                <br />
                平穏で落ち着いた生活の実現のためにいろいろ試行中
                <br />
                バイク(SR400)に載ってたがお休み中
                <br />
                アイマスP
              </chakra.p>
              <MarkerHeader>Skills</MarkerHeader>
              <chakra.p mb="2.5rem" pb="2" borderBottom="1px solid gray">
                PHP, Laravelを用いたシステム開発
                <br />
                JamStackサイト開発
                <br />
                Android(Kotlin)アプリ開発
                <br />
                Electron(TypeScript, React)デスクトップアプリ開発
                <br />
                などを業務で経験
                <br />
                インフラ、クラウドは素人に毛が生えた程度
                <br />
                個人開発でFlutterアプリ開発中（2021/12現在）
              </chakra.p>
            </Box>
          </Flex>
          <Flex justify="center" mb="6.67" width="100%">
            <Box mb="2.5rem" pb="12px">
              <MarkerHeader>Work</MarkerHeader>
              <Box width="100%">
                <chakra.h4 mx="auto" my="0">
                  ハンバーガーオーダーWebアプリ
                </chakra.h4>
                <p>
                  Udemyの
                  <MarkerLink
                    href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reactコース
                  </MarkerLink>
                  で制作した習作Webアプリ
                  <br />
                  クラスコンポーネント, 関数コンポーネント, 非同期処理,
                  バリデーション, Redux, テスト, デプロイ, React
                  Hooksなど一通りの機能は網羅
                  <br />
                  デプロイしたアプリは
                  <MarkerLink
                    href="https://react-my-burger-4e9f1.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    こちら
                  </MarkerLink>
                  <br />
                  Githubは
                  <MarkerLink
                    href="https://github.com/viscosenpai/react-complete-guide"
                    target="_blank"
                    rel="noreferrer"
                  >
                    こちら
                  </MarkerLink>
                </p>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </>
  );
};

export default About;
