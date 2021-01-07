/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `/` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // put a skip in
  const result = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { type: { eq: "blog" } } }
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
    `,
    { limit: 1000 }
  )
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  const p = result.data.allMarkdownRemark.edges
  console.log(p)
  p.forEach((p, index) => {
    // create prev and next on each posts render (for Blog Post Pagination, BPP)
    const previous = index === p.length - 1 ? null : p[index + 1]
    const next = index === 0 ? null : p[index - 1]

    // previous and next are objects props sent as pageContect object to blogPostTemplate
    createPage({
      path: p.node.frontmatter.slug,
      component: path.resolve(`./src/template/blogTemplate.js`),
      context: {
        slug: p.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    // create prev and next on each posts render (for Blog Post Pagination, BPP)
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    // console.log(previous)

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

  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    console.log(i === 0 ? `/blog` : `/blog/${i + 1}`)
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve(`./src/components/Blogs/blogs.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  // result.data.allMarkdownRemark.nodes.forEach(node => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //     component: path.resolve(`./src/template/blogTemplate.js`),
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       slug: node.frontmatter.slug,
  //     },
  //   })
  // })
}
