const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `/` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // get recent

  const generateBlogItemPages = async () => {
    const result = await graphql(
      `
        query {
          allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog" } } }
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                }
              }
            }
          }
        }
      `
    )

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      // create prev and next on each posts render (for Blog Post Pagination, BPP)
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      // previous and next are objects props sent as pageContect object to blogPostTemplate
      createPage({
        path: post.node.frontmatter.slug,
        component: path.resolve(`./src/template/blogTemplate.js`),
        context: {
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })
  }

  generateBlogItemPages()

  // date might be broken
  const result = await graphql(
    `
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "blog" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Single blog
  const posts = result.data.allMarkdownRemark.edges

  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,

      component: path.resolve(`./src/components/blogs/blogs.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
