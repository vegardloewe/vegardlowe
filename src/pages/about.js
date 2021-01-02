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
      <SEO title="About" keywords={[`Vegard Løwe`, `Løwe`, `Design`, `designer`]} />

      <article className="post-content-wide page-template no-image">
        <div className="post-content-body">
          <h2 id="">
            Multidisciplinary Designer & Developer
          </h2>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption></figcaption>
          </figure>
          <section className="row post-content margin-zero-top reverse">
          <div className="column30 space-50tm">
          <h4>Most used tools</h4>
          <p className="small">
          <li>Adobe Illustrator</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe InDesign</li>
          <li>HTML5 / CSS / Javascript</li>
          </p>
          </div>
          <div className="column70">
          <h2>Hi, I'm Vegard</h2>
          <p>I’m a freelance designer specializing in branding and UI design with
          over 6 years of experience. I work with companies, brands and startups
          across the world. While my design style is minimalistic and stylish, I can
          adapt to any pre-existing design style. </p>
          <p>I have worked on projects in UI/UX, web design, branding and identity
          and print design. I enjoy digital experimentation and learning about new
          tools and approaches to continue enhancing my design process.</p>
          <a href="https://www.behance.net/VegardLoewe">Behance</a> / <a href="https://www.linkedin.com/in/vegard-lowe/">LinkedIn</a> / <a href="https://dribbble.com/Vegardloewe">Dribbble</a>
          </div>
          </section>
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
