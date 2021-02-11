import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo'
import LandingText from '../components/landing-text'

const BlogIndex = ({ location }) => {
  return (
    <>
      <Layout>
        <SEO title='anmpog.dev' location={location} />
        <LandingText location={location} />
      </Layout>
    </>
  )
}

export default BlogIndex