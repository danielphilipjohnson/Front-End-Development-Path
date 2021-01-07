import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blog from "./blog"
import Header from "../header"

function Blogs(props) {
  // check max page and prevent minimum
  // numPages: 3, currentPage: 3
  console.log(props)

  return (
    <>
      <Header siteTitle={`Title`} />

      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          {/* {data.allMarkdownRemark.edges.map(blog => {
            return <Blog key={blog.node.id} blog={blog.node} />
          })} */}

          <nav className="blog-nav nav nav-justified my-5">
            <a
              className="nav-link-prev nav-item nav-link d-none rounded-left"
              href="/blog-list"
            >
              Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            {/* <a
              className="nav-link-next nav-item nav-link rounded"
              href={`/blog/${pageContext.currentPage + 1}`}
            >
              Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
            </a> */}
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

export default Blogs
