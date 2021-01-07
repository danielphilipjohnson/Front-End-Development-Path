import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data, pageContext }) {
  // use to cycle blogs
  const { previous, next } = pageContext
  const { allMarkdownRemark } = data
  const { frontmatter, html, timeToRead } = allMarkdownRemark.edges[0].node
  console.log(previous)
  console.log(next)
  return (
    <Layout>
      <div className="main-wrapper">
        <article class="blog-post px-3 py-5 p-md-5">
          <div class="container">
            <header class="blog-post-header">
              <h2 class="title mb-2">{frontmatter.title}</h2>
              <div class="meta mb-3">
                <span class="date">{frontmatter.date}</span>
                <span class="time">{timeToRead} min read </span>
                <span class="comment">
                  <a href="/">4 comments</a>
                </span>
              </div>
            </header>

            <div class="blog-post-body">
              <figure class="blog-banner">
                <a href="https://github.com/danielphilipjohnson">
                  <img
                    class="img-fluid"
                    src={frontmatter.cover}
                    alt="blog cover"
                  />
                </a>
                <figcaption class="mt-2 text-center image-caption">
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

            {/* <nav class="blog-nav nav nav-justified my-5">
            <a
              class="nav-link-prev nav-item nav-link rounded-left"
              href="index.html"
            >
              Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a
              class="nav-link-next nav-item nav-link rounded-right"
              href="blog-list.html"
            >
              Next<i class="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav> */}
          </div>
        </article>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       timeToRead
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//         cover
//         imageCredit
//       }
//     }
//   }
// `
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
            datePublish
            id
            slug
            title
            cover
          }
        }
      }
    }
  }
`
