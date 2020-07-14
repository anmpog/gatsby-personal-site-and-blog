import React from 'react'

import SEO from '../components/seo'
import LandingText from '../components/landing-text'

const BlogIndex = ({ data, location }) => {
  return (
    <>
      <SEO title='anmpog.dev' location={location} />
      <LandingText location={location} />
    </>
  )
}

export default BlogIndex

