import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from 'typography'
import usePosts from '../hooks/use-posts'
import { Link } from 'gatsby'
// import PostPreview from '../components/post-preview'

const Blog = ({ location }) => {
  const posts = usePosts()

  return (
    <Layout title='Blog Posts' location={location}>
      <SEO title='Blog Posts' />
      <h1>This will be where all blog posts are listed</h1>

      {posts.map(post => {
        console.log('Post inside map: ', post)
        const title = post.title || post.slug
        return (
          <article key={post.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={post.slug}>
                  {title}
                </Link>
              </h3>
              <time>{post.date}</time>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.description
                }}
              />
            </section>
          </article>
        )
      })}

    </Layout>
  )
}

export default Blog