import React from 'react';
import { Box, chakra } from '@chakra-ui/react';
import MarkerLink from 'src/components/markerLink';

const Works = () => {
  return (
    <Box width="100%" mt="8">
      <chakra.h4 mx="auto" mb="2" fontSize="2xl">
        Movement Measure
      </chakra.h4>
      <Box mb="12" pb="12" borderBottom="1px solid gray">
        移動した距離と時間を計測できるシンプルなライフログアプリ。
        <br />
        移動中に起きた出来事なんかもコメントで記録できます。
        <br />
        ウォーキングやランニング、ツーリングで使ってみてください。
        <br />
        <br />
        App Store版は
        <MarkerLink
          href="https://apps.apple.com/jp/app/id1593339195?mt=8"
          target="_blank"
          rel="noreferrer"
        >
          こちら
        </MarkerLink>
        <br />
        Google Play版は
        <MarkerLink
          href="https://play.google.com/store/apps/details?id=viscosenpai.github.io.movement_measure"
          target="_blank"
          rel="noreferrer"
        >
          こちら
        </MarkerLink>
        <br />
        Githubは
        <MarkerLink
          href="https://github.com/viscosenpai/movement_measure"
          target="_blank"
          rel="noreferrer"
        >
          こちら
        </MarkerLink>
      </Box>
      <chakra.h4 mx="auto" mb="2" fontSize="2xl">
        ハンバーガーオーダーWebアプリ
      </chakra.h4>
      <Box mb="12" pb="12" borderBottom="1px solid gray">
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
        クラスコンポーネント, 関数コンポーネント, 非同期処理, バリデーション,
        Redux, テスト, デプロイ, React Hooksなど一通りの機能は網羅
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
      </Box>
    </Box>
  );
};

export default Works;
