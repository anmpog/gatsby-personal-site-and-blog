/** @jsx jsx */
import Layout from '../components/layout'
import { jsx } from 'theme-ui'

import SEO from '../components/seo'

const Home = ({ location }) => {
  return (
    <Layout>
      <SEO title='anmpog.dev' location={location} />
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          height: '100%',
          margin: '0px',
        }}
      >
        <h1
          sx={{
            fontSize: `clamp(1rem, 2.25vw, 2.5rem)`,
            fontWeight: 400,
            marginBottom: 4,
            color: 'muted',
          }}
        >
          hi, i&apos;m anthony!
        </h1>
        <h2
          sx={{
            fontSize: `clamp(2rem, 4vw, 3.75rem)`,
          }}
        >
          i&apos;m a front-end web developer based in boulder, co.
        </h2>
        <h2
          sx={{
            fontSize: `clamp(1rem, 2.25vw, 2.5rem)`,
            fontWeight: 400,
            color: 'muted',
          }}
        >
          i&apos;m excited about building things, helping others, and sharing
          what i&apos;ve learned on my web-dev journey. let&apos;s make
          something cool together.
        </h2>
      </section>
    </Layout>
  )
}

export default Home
