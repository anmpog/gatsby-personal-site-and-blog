/** @jsx jsx */
import React from 'react'
import Layout from '../components/layout'
import { jsx, Themed, Container } from 'theme-ui'

import SEO from '../components/seo'

const BlogIndex = ({ location }) => {
  return (
    <>
      <Layout>
        <SEO title='anmpog.dev' location={location} />
        <section>
          <h1
            sx={{
              mt: [
                'calc(30%-75px)',
                'calc(25%-75px)',
                null,
                'calc(10% - 75px)',
              ],
              marginBottom: '0px',
              fontSize: ['1.75rem', '5vw', null, null, null, '4rem'],
            }}
          >
            Hi, I&apos;m Anthony. I&apos;m a front-end web developer based in
            Boulder, CO. I&apos;m excited about building, helping and sharing.
            Let&apos;s make something cool together.
          </h1>
        </section>
      </Layout>
    </>
  )
}

export default BlogIndex
