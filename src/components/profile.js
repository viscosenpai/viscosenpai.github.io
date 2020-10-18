import React from "react"
import styled from "@emotion/styled"

import PORTRAIT_IMG from "../images/profilel_image.jpg"

const ProfileContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const Portrait = styled.span`
  width: 40%;
  text-align: center;
  margin-top: 6%;
`

const ProfileContents = styled.div`
  width: 60%;
`

const BorderParagraph = styled.p`
  margin-bottom: 2.5rem;
  padding-bottom: 12px;
  border-bottom: 1px solid #595959;
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
  }
`

const Profile = () => (
  <ProfileContainer>
    <Portrait><img src={PORTRAIT_IMG} alt="viscosenpai" /></Portrait>
    <ProfileContents>
      <MarkerHeader>Personal</MarkerHeader>
      <BorderParagraph>
        <strong>KAMA Hiroki (<a href="https://twitter.com/viscosenpai" target="_blank" rel="noopener noreferrer">@viscosenpai</a>)</strong><br />
        福岡県在住のエンジニア<br />
        平穏で落ち着いた生活の実現のためにいろいろ試行中<br />
        バイク(SR400)に乗ってたけどお休み中<br />
        アイマスP
      </BorderParagraph>
      <MarkerHeader>Skills</MarkerHeader>
      <BorderParagraph>
        現職ではPHP, Laravel, FuelPHPを使用したバックエンド業務<br />
        Kotlinを使用したAndroidアプリ開発等を経験<br />
        インフラ周りはVagrantやDockerなど一般的な範囲で使用可<br />
        JavaScriptいじりが趣味, 特にReactを中心に学習中
      </BorderParagraph>
    </ProfileContents>
  </ProfileContainer>
)

export default Profile