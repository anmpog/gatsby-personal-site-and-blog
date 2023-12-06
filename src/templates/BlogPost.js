/** @jsx jsx */
import { graphql } from 'gatsby'
import ExternalLink from '../components/shared/ExternalLink'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { jsx, Box, Grid } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CodeBlock from '../components/CodeBlock'
import { darken } from '@theme-ui/color'
import ContentSection from '../components/ContentSection'
import Bio from '../components/Bio'
import InternalLink from '../components/shared/InternalLink'

const BlogNavLink = ({ to, linkText, rel, postTitle }) => {
  const formattedSlug = to ? `../${to}` : null
  return (
    <InternalLink
      to={formattedSlug}
      rel={rel}
      sx={{
        variant: 'box.card.transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: '1px',
        borderColor: 'muted',
        padding: 2,
        pointerEvents: !to ? 'none' : 'all',
        backgroundColor: !to ? darken('background', 0.1) : 'background',
        fontStyle: !to ? 'italic' : 'none',
        '&:hover': {
          backgroundColor: darken('darkCard', 0.1),
          cursor: !to ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s',
        },
        '&:not([href])': {
          opacity: '0.7',
        },
      }}
    >
      <span sx={{ fontSize: 2, mb: 3, color: 'darken' }}>{linkText}</span>
      <p
        sx={{
          fontSize: 1,
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
          m: 0,
          p: 2,
        }}
      >
        {postTitle}
      </p>
    </InternalLink>
  )
}

const components = {
  pre: CodeBlock,
  ExternalLink,
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
        <ContentSection
          leftRail={<Bio />}
          rightRail={
            <article sx={{ variant: 'box.card.primary' }}>
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
            </article>
          }
        />
        <footer
          sx={{
            mb: [3, null, 5],
            marginTop: 'auto',
          }}
        >
          <Grid
            as='nav'
            sx={{
              gridTemplateColumns: [
                'repeat(1, minmax(0, 1fr))',
                null,
                'repeat(3, minmax(0, 1fr))',
              ],
            }}
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
          </Grid>
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
