import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout-dark"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ThankyouPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Kontakt" keywords={[`kontakt`, `løwe`, `vegard løwe`, `design`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="forms">Thank you for reaching out.</h2>
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
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ThankyouPage location={props.location} data={data} {...props} />
    )}
  />
)
