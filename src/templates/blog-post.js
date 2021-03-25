import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
      <div className='blog-post-wrapper'>
        <article className='blog-post-content'>
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <time dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </time>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <hr />
        <footer className='blog-post-footer'>
          <Bio />
          <nav className='bottom-nav'>
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
                <Link to='/blog'>
                  Blog Home
                </Link>
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
        </footer>
      </div>
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
