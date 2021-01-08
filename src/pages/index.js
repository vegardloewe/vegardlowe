import React, { useEffect, createRef, Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import "../utils/normalize.css"
import "../utils/css/screen.css"

import '../components/down.css'
import animation from '../components/animations/down.json'

import loadable from '@loadable/component'

const Down = loadable(() => import('../components/down'))



// import "../utils/global.scss"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location ) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0



  return (
    <Layout title={siteTitle}>
      <SEO
        title="Vegard J. Løwe - Brand Designer & Front End Developer"
        keywords={[`Vegard J. Løwe`, `løwe`, `design`, `logo design`, `web development`]}
        description="Vegard is a freelance designer and has worked on projects in UI/UX, web design, branding and identity and print design. He enjoys digital experimentation and learning about new tools and approaches to continue enhancing his design process."
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            Creative Designer & Developer
          </h2>
          <div className="col-5">
            <p>Hi, I'm Vegard Løwe. A passionate Brand Designer and Front End Developer based in Norway.</p>
          </div>
          <Down/>
        </header>
      )}
      <div className=" post-feed space-100t">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            client
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
