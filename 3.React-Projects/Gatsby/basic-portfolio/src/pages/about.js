import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "util" }, id: { eq: "1" } } }
        ) {
          edges {
            node {
              html
              frontmatter {
                date
                id
                slug
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <section className="about-section py-5">
        {allMarkdownRemark.edges.map(({ node }) => (
          <article
            className="my-4 container"
            dangerouslySetInnerHTML={{ __html: node.html }}
          ></article>
        ))}
      </section>
    </Layout>
  )
}

export default About
