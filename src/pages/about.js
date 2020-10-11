import React from "react"
import styled from "@emotion/styled"
import "typeface-pridi"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import Work from "../components/work"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const PageTitle = styled.h1`
  font-family: 'Pridi', serif;
  font-size: 2.5rem;
`

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
      <PageTitle>About</PageTitle>
      <Profile />
      <Work />
    </Content>
  </Layout>
)

export default About