import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Om" keywords={[`Vegard Løwe`, `Løwe`, `Design`, `grafisk design`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Designer med sterk interesse for ny teknologi og entreprenørskap
          </h2>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption></figcaption>
          </figure>
          <h3 id="dynamic-styles">Vegard J. Løwe</h3>
          <p>
            Jeg er en selvlært og allsidig designer primært innenfor
            feltene merkevareidentitet og UI/UX-design.
          </p>
          <p>
            De siste årene har jeg utforsket webutvikling og ulike programmeringsspråk som HTML, CSS, Javascript.
            Dette har gjort meg i stand til å få innsikt i å lage brukervennlig UI/UX-design
            og utvikle fullverdige opplevelser for klienter. Jeg tilbyr i dag raske nettsider bygget ved en
            <a href="https://jamstack.org/"> JAM-tilnærming</a> på rammeverket React.
          </p>
          <p>
            Har du et prosjekt som du ønsker å diskutere? Ikke nøl med å ta <a href="/kontakt">kontakt</a> i dag.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "Working.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
