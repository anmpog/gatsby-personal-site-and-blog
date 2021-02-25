import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = ({ location }) => {
  return (
    <Layout>
      <SEO title='Projects' location={location} />
      <p>
        There's nothing here yet, but I'm putting together a collection of my projects. Check back again soon!
      </p>
    </Layout>
  )
}

export default Projects
