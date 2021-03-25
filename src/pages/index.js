import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo'

const BlogIndex = ({ location }) => {
  return (
    <>
      <Layout>
        <SEO title='anmpog.dev' location={location} />
        <h1>
          <article className='landing-text'>
            Hi, I'm Anthony. I'm a front-end web developer based in Boulder, CO. I'm excited
            about building, helping and sharing. Let's make something cool
            together.
          </article>
        </h1>
      </Layout>
    </>
  )
}

export default BlogIndex