import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import SEO from 'src/components/seo';
import Layout from 'src/components/layout';
import PageHeader from 'src/components/pageHeader';
import { chakra } from '@chakra-ui/system';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Plicy | KAMA Hiroki: Portfolio"
        description="KAMA Hiroki: Portfolioは、個人情報保護の重要性を認識し、その保護の徹底のため、プライバシーポリシーの定めに従い、お客様からの情報を適正に取り扱います。"
      />
      <Layout>
        <Box mx="auto" my="0" maxW="890px" px="1.5rem" py="1rem">
          <PageHeader>Privacy Policy</PageHeader>
          <Box as="section">
            <chakra.p>
              KAMA Hiroki（以下，「運営者」といいます。）は，iOS,
              Androidアプリで提供するサービス「Movement
              Measure」（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>1.個人情報の定義</chakra.h3>
            <chakra.p>
              個人情報とは、個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述などによって特定の個人を識別できるもの（他の情報と容易に照合することができ、それによって特定の個人を識別することができることとなるものを含みます。）
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>2.取得する情報</chakra.h3>
            <chakra.ol>
              <chakra.li>位置情報</chakra.li>
            </chakra.ol>
            <chakra.p>
              運営者は、ユーザーの現在地等の情報を利用したサービスを提供するため、当該サービスの提供に必要な範囲内で、ユーザーのスマートフォン端末、タブレット端末その他の情報端末等から送信される位置情報を収集することがあります。なお、情報端末上の設定の変更により位置情報の送信を停止することができますが、サービスの一部を利用できなくなる場合があります
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>3.目的の明確化</chakra.h3>
            <chakra.p>
              個人情報をご提供いただく場合、その特定された利用目的の達成に必要な範囲の適切な個人情報の取得、利用及び提供を行い、必要な範囲を超えた個人情報の取扱いは行いません。また、そのための措置を講じます。
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>4.安全対策</chakra.h3>
            <chakra.p>
              お預かりした個人情報への不正なアクセス、個人情報の漏洩、滅失又はき損等のリスクに関しては、合理的な安全対策を講じ、予防及び是正に努めます。
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>5.個人情報に関する窓口</chakra.h3>
            <chakra.p>
              個人情報に関する苦情及び相談があった場合、照会、修正や削除の希望があった場合には、適切かつ迅速に処理します。
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>6.法令の遵守</chakra.h3>
            <chakra.p>
              運営者は、保有している個人情報に関して、その適用される法令、国が定める指針その他の規範を遵守すると共に、一般的な常識や社会通念上おかしいと思われるようなデータの処理方法に対して、体制内で厳しく罰則を設け、内部からの情報漏洩の防止に務めます。
            </chakra.p>
          </Box>
          <Box as="section">
            <chakra.h3>
              7.個人情報保護マネジメントシステムの継続的改善
            </chakra.h3>
            <chakra.p>
              この個人情報保護方針の全部または一部を予告無く改訂する場合があります。また、変更によるいかなる損害にも運営者では責任を負いません。
            </chakra.p>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
