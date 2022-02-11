/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/shared/Link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { jsx, Box } from 'theme-ui'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CodeBlock from '../components/code-block'

const components = {
  pre: CodeBlock,
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        location={location}
      />
      <MDXProvider components={components}>
        <article>
          <Box
            sx={{
              textAlign: 'center',
              mb: 5,
            }}
          >
            <h1 sx={{ variant: 'styles.h1' }}>{post.frontmatter.title}</h1>
            <time
              dateTime={post.frontmatter.date}
              sx={{
                color: 'primary',
                fontSize: 3,
              }}
            >
              {post.frontmatter.date}
            </time>
            <hr />
          </Box>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <footer>
          <nav>
            <ul>
              <li>
                {previous ? (
                  <Link to={`../${previous.frontmatter.slug}`} rel='prev'>
                    ← {previous.frontmatter.title}
                  </Link>
                ) : (
                  <p>You're on the first post.</p>
                )}
              </li>
              <li>
                <Link to='/blog'>Blog Home</Link>
              </li>
              <li>
                {next ? (
                  <Link to={`../${next.frontmatter.slug}`} rel='next'>
                    {next.frontmatter.title} →
                  </Link>
                ) : (
                  <p>No next post...yet.</p>
                )}
              </li>
            </ul>
          </nav>
          <Bio />
        </footer>
      </MDXProvider>
    </Layout>
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
      excerpt(pruneLength: 180)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
