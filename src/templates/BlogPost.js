/** @jsx jsx */
import { graphql } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby'
import Link from '../components/shared/Link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { jsx, Box, Flex } from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CodeBlock from '../components/code-block'
import { darken, lighten } from '@theme-ui/color'

const BlogNavLink = ({ to, linkText, rel, postTitle }) => {
  const formattedSlug = to ? `../${to}` : null
  const trimmedTitle =
    postTitle?.length > 120 ? `${postTitle.substring(0, 120)}...` : postTitle
  return (
    <GatsbyLink
      to={formattedSlug}
      rel={rel}
      sx={{
        color: 'muted',
        flexBasis: '33.33%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        borderWidth: '1px',
        borderColor: 'muted',
        borderStyle: 'solid',
        borderRadius: '0.2rem',
        padding: 2,
        pointerEvents: !to ? 'none' : 'all',
        backgroundColor: !to ? darken('background', 0.1) : 'background',
        fontStyle: !to ? 'italic' : 'none',
        '&:hover': {
          background: lighten('background', 0.1),
          cursor: !to ? 'not-allowed' : 'default',
        },
        '&:not([href])': {
          opacity: '0.7',
        },
      }}
    >
      <span sx={{ fontSize: 2, mb: 3 }}>{linkText}</span>
      <p
        sx={{
          fontSize: 1,
          fontStyle: 'italic',
          m: 0,
          p: 2,
        }}
      >
        {trimmedTitle}
      </p>
    </GatsbyLink>
  )
}

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
        <footer sx={{ marginTop: 6 }}>
          <Flex
            as='nav'
            sx={{ gap: [2, null, 3], flexDirection: ['column', null, 'row'] }}
          >
            <BlogNavLink
              to={previous?.frontmatter?.slug}
              linkText={'← Last Post'}
              postTitle={
                previous?.frontmatter?.title || "You're on the first post!"
              }
              rel='prev'
            />
            <BlogNavLink to='../blog' linkText={'Blog Home'} />
            <BlogNavLink
              to={next?.frontmatter?.slug}
              linkText={'Next Post →'}
              postTitle={next?.frontmatter?.title || "You're on the last post!"}
              rel='next'
            />
          </Flex>
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
