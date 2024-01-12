/** @jsx jsx */
import { Fragment } from 'react'
import { graphql } from 'gatsby'
import ExternalLink from '../components/shared/ExternalLink'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { jsx, Box } from 'theme-ui'
import SEO from '../components/SEO'
import CodeBlock from '../components/CodeBlock'
// import CodeSandbox from '../components/CodeSandbox'
import BlogNavigation from '../components/Blog/BlogNavigation'

const components = {
  pre: CodeBlock,
  ExternalLink,
  // CodeSandbox,
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { previous, next } = pageContext
  return (
    <Fragment>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        location={location}
      />
      <MDXProvider components={components}>
        <Box
          as='article'
          sx={{
            variant: 'box.card.primary',
            mb: [3, null, 4],
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 5,
            }}
          >
            <h3>{post.frontmatter.title}</h3>
            <time dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </time>
            <hr />
          </Box>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Box>
        <BlogNavigation previous={previous} next={next} />
      </MDXProvider>
    </Fragment>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 90)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
