import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data, pageContext }) {
  const { previous, next } = pageContext
  const { allMarkdownRemark } = data
  const { frontmatter, html, timeToRead } = allMarkdownRemark.edges[0].node

  const previousLink = () => {
    if (previous) {
      return previous.frontmatter.slug
    }
  }
  const nextLink = () => {
    if (next) {
      return next.frontmatter.slug
    }
  }

  return (
    <Layout>
      <div className="main-wrapper">
        <article className="blog-post px-3 py-5 p-md-5">
          <div className="container">
            <header className="blog-post-header">
              <h2 className="title mb-2">{frontmatter.title}</h2>
              <div className="meta mb-3">
                <span className="date">{frontmatter.date}</span>
                <span className="time">{timeToRead} min read </span>
                <span className="comment">
                  <a href="/">4 comments</a>
                </span>
              </div>
            </header>

            <div className="blog-post-body">
              <figure className="blog-banner">
                <a href="https://github.com/danielphilipjohnson">
                  <img
                    className="img-fluid"
                    src={frontmatter.cover}
                    alt="blog cover"
                  />
                </a>
                <figcaption className="mt-2 text-center image-caption">
                  Image Credit:
                  <a
                    href="https://unsplash.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {frontmatter.imageCredit}
                  </a>
                </figcaption>
              </figure>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>

            <nav className="blog-nav nav nav-justified my-5">
              {previousLink() && (
                <Link
                  to={previous.frontmatter.slug}
                  activeClassName="active"
                  className="nav-link-prev nav-item nav-link rounded-left"
                >
                  Previous
                  <i className="arrow-prev fas fa-long-arrow-alt-left"></i>
                </Link>
              )}

              {nextLink() && (
                <Link
                  className="nav-link-next nav-item nav-link rounded-right"
                  to={next.frontmatter.slug}
                >
                  Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
                </Link>
              )}
            </nav>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          excerpt
          id
          timeToRead
          html
          frontmatter {
            date
            id
            slug
            title
            cover
            imageCredit
          }
        }
      }
    }
  }
`
