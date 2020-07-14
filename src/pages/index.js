import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import LandingText from '../components/landing-text'

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  return (
    <>
      <SEO title='anmpog.dev' location={location} />
      <LandingText location={location} />
    </>
  )
}

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
