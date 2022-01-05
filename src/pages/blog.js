import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/PostPreview'

const Blog = ({ location }) => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title='Blog Posts' location={location} />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default Blog
