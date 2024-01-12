import { Fragment } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'
import ContentSection from '../components/ContentSection'

const Blog = ({ location }) => {
  const posts = usePosts()

  return (
    <Fragment>
      <SEO title='Blog Posts' location={location} />
      <ContentSection>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </ContentSection>
    </Fragment>
  )
}

export default Blog
