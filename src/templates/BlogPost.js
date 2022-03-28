/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/shared/Link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { jsx, Box, Flex } from 'theme-ui'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CodeBlock from '../components/code-block'

const components = {
  pre: CodeBlock,
  Link,
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
        <Box sx={{ maxWidth: '950px', margin: '0 auto' }}>
          <article>
            <Box
              sx={{
                textAlign: 'center',
                mb: 5,
              }}
            >
              <h2>{post.frontmatter.title}</h2>
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
              <Flex
                as='ul'
                sx={{
                  margin: '100px 0 45px 0',
                  flexDirection: ['column', null, 'row'],
                  py: 0,
                }}
              >
                <li
                  sx={{
                    flexBasis: '33.33%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: ['center', null, 'flex-start'],
                    py: 4,
                  }}
                >
                  {previous ? (
                    <Link to={`../${previous.frontmatter.slug}`} rel='prev'>
                      ← Last Post
                    </Link>
                  ) : (
                    <p sx={{ margin: '0px', fontStyle: 'italic' }}>
                      You're on the first post.
                    </p>
                  )}
                </li>
                <li
                  sx={{
                    flexBasis: '33.33%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    py: 4,
                  }}
                >
                  <Link to='/blog' activeClassName={null}>
                    Blog Home
                  </Link>
                </li>
                <li
                  sx={{
                    flexBasis: '33.33%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: ['center', null, 'flex-end'],
                    py: 4,
                  }}
                >
                  {next ? (
                    <Link to={`../${next.frontmatter.slug}`} rel='next'>
                      Next Post →
                    </Link>
                  ) : (
                    <p
                      sx={{
                        margin: '0px',
                        fontStyle: 'italic',
                      }}
                    >
                      You're on the last post.
                    </p>
                  )}
                </li>
              </Flex>
            </nav>
            <Bio />
          </footer>
        </Box>
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
