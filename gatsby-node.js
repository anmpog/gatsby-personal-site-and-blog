const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { EDEADLK } = require("constants")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
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
    console.log('Post obj from w/in the forEach loop: ', post.next)
    createPage({
      path: `/blog/${post.node.frontmatter.slug || post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous: post.previous,
        next: post.next
      },
    })
    console.log('The post object from createPage: ', post)
    console.log('Associated index: ', index)
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
