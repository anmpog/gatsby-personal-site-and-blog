const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPost = path.resolve(`./src/templates/BlogPost.js`)
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
              }
            }
            next {
              frontmatter {
                title
                slug
              }
              fields {
                slug
              }
            }
            previous {
              frontmatter {
                title
                slug
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.frontmatter.slug || post.node.fields.slug}`,
      component: BlogPost,
      context: {
        slug: post.node.fields.slug,
        previous: post.previous,
        next: post.next
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
