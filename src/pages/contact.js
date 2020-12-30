import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout-dark"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} className="dark">
      <SEO title="Kontakt" keywords={[`kontakt`, `løwe`, `vegard løwe`, `design`]} />

      <article className="post-content page-template no-image ">
        <div className="post-content-body">
          <h2 id="forms">Get in touch</h2>
          <p>If you have a project in mind or a freelance contract enquiry, feel free
          to get in touch by form below. I usually respond within 24h.</p>

          <form method="POST" name="Kontaktskjema" action="/thank-you" data-netlify='true'>
            <div className="row gtr-uniform">
            <input type="hidden" name="form-name" value="Kontaktskjema" />
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="demo-name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="demo-email"
                  placeholder="Email"
                  required
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="type-henvendelse" id="demo-category">
                  <option value> Choose an Enquiry </option>
                  <option value={1}>Brand Identity</option>
                  <option value={2}>Visual Design</option>
                  <option value={3}>Website Design</option>
                  <option value={4}>Website Development</option>
                  <option value={5}>Other</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="message"
                  id="demo-message"
                  placeholder="Describe your project"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <button type="submit" className="primary">
                    Send message
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </form>
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
