/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
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
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    console.log(JSON.stringify(node.frontmatter, null, 4))
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/template/blogTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
      },
    })
  })
}
