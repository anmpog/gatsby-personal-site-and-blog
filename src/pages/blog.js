import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'
import ContentSection from '../components/ContentSection'
import Bio from '../components/Bio'

const Blog = ({ location }) => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title='Blog Posts' location={location} />
      <ContentSection
        leftRail={<Bio />}
        rightRailContainerStyles={{ gap: [3, null, 4] }}
        rightRail={
          <React.Fragment>
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </React.Fragment>
        }
      />
    </Layout>
  )
}

export default Blog
