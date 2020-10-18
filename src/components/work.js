import React from "react"
import styled from "@emotion/styled"

const WorkContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const WorkContents = styled.div`
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

const WorkContent = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 12px;
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

const WorkHeader = styled.h4`
  margin: 1rem auto;
`

const Work = () => (
  <WorkContainer>
    <WorkContents>
      <MarkerHeader>Work</MarkerHeader>
      <WorkContent>
        <WorkHeader>ハンバーガーオーダーWebアプリ</WorkHeader>
        <p>
          Udemyの<a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"  target="_blank" rel="noopener noreferrer">Reactコース</a>で制作した習作Webアプリ<br />
          クラスコンポーネント, 関数コンポーネント, 非同期処理, バリデーション, Redux, テスト, デプロイ, React Hooksなど一通りの機能は網羅<br />
          デプロイしたアプリは<a href="https://react-my-burger-4e9f1.web.app/" target="_blank" rel="noopener noreferrer">こちら</a><br />
          Githubは<a href="https://github.com/viscosenpai/react-complete-guide" target="_blank" rel="noopener noreferrer">こちら</a>
        </p>
      </WorkContent>
    </WorkContents>
  </WorkContainer>
)

export default Work