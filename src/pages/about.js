import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HTMLIcon, JavaScriptIcon, NodeJSIcon, ReactIcon, MongoIcon, CSSIcon, GatsbyIcon, FirefoxIcon } from '../assets/dev-icons'

const About = ({ location }) => {
  return (
    <Layout>
      <SEO title='About Me' location={location} />
      <p>
        I'm Anthony! I'm a self-taught web developer who lives in Boulder,
        Colorado. I am primarily a JavaScript developer, and I gravitate
        towards front-end development (but I can break things in NodeJS as well). I am also interested in – but not very good at – design. Please feel free to contact me via social media if you want to chat about anything!
      </p>

      <p>
        Outside coding, my interests include climbing, skiing, riding bikes,
        cooking, making/consuming music, video games, watches, my pets Bean and Ernie, being unnecessarily verbose, and
        using the word "rad" unironically.
      </p>

      <h2 className='tech-skills'>Stuff I Use:</h2>
      <ul className='grid-container'>
        <li>
          <JavaScriptIcon />
        </li>
        <li>
          <NodeJSIcon />
        </li>
        <li>
          <ReactIcon />
        </li>
        <li>
          <CSSIcon />
        </li>
        <li>
          <HTMLIcon />
        </li>
        <li>
          <MongoIcon />
        </li>
        <li>
          <GatsbyIcon />
        </li>
        <li>
          <FirefoxIcon />
        </li>
      </ul>
    </Layout>
  )
}

export default About
