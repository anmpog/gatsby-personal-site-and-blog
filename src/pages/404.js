import { Fragment } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const NotFoundPage = ({ location }) => {
  return (
    <Fragment>
      <SEO title='404: Not Found' location={location} />
      <h5>The page you were looking for does not exist... yet.</h5>
    </Fragment>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
