import React from "react"
import { graphql } from "gatsby"

import Blog from "./blog"
import Header from "../header"

function Blogs({ data, pageContext }) {
  const isPreviousBlogs = () => {
    if (pageContext.currentPage > 1) {
      return true
    }
  }
  const PreviousBlogLink = () => {
    if (pageContext.currentPage <= 2) {
      return "/blog/"
    } else {
      return `/blog/${pageContext.currentPage - 1}`
    }
  }

  const isMoreBlogs = () => {
    if (pageContext.currentPage < pageContext.numPages) {
      return true
    }
  }

  return (
    <>
      <Header siteTitle={`Daniel's React Portfolio`} />

      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container container-blog">
          {data.allMarkdownRemark.edges.map(blog => {
            return <Blog key={blog.node.id} blog={blog.node} />
          })}

          <nav className="blog-nav nav nav-justified my-5">
            {isPreviousBlogs() && (
              <a
                className="nav-link-prev nav-item nav-link  rounded-left"
                href={PreviousBlogLink()}
              >
                Previous
                <i className="arrow-prev fas fa-long-arrow-alt-left"></i>
              </a>
            )}

            {isMoreBlogs() && (
              <a
                className="nav-link-next nav-item nav-link rounded"
                href={`/blog/${pageContext.currentPage + 1}`}
              >
                Next
                <i className="arrow-next fas fa-long-arrow-alt-right"></i>
              </a>
            )}
          </nav>
        </div>
      </section>
    </>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          id
          timeToRead
          frontmatter {
            id
            slug
            title
            cover
            date
          }
        }
      }
    }
  }
`

export default Blogs
