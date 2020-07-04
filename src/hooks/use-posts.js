import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              slug
              author
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges.map(post => ({
    title: post.node.frontmatter.title,
    author: post.node.frontmatter.author || 'Anthony Pogliano',
    date: post.node.frontmatter.date,
    description: post.node.frontmatter.description || post.node.excerpt,
    slug: post.node.frontmatter.slug || post.node.fields.slug
  }))
}

export default usePosts