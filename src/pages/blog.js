import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'
import { Box } from 'theme-ui'

const Blog = ({ location }) => {
  const posts = usePosts()

  return (
    <Layout>
      <Box sx={{ maxWidth: '950px', margin: '0 auto' }}>
        <SEO title='Blog Posts' location={location} />
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Box>
    </Layout>
  )
}

export default Blog
