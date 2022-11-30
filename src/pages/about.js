import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there ! I'm the proud creator of this site, which I build with gatsby</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Gatsby | About me</title>
    <meta name="description" content="Pour tout savoir à propos de moi" />
  </>
)

export default AboutPage
