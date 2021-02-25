import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

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

      <h2 className='tech-skills'>Tech</h2>
      <ul>
        <li>JavaScript ES6</li>
        <li>NodeJS/Express</li>
        <li>React</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
      </ul>

      <h2 className='tech-skills'>Tools</h2>
      <ul>
        <li>GatsbyJS</li>
        <li>VSCode</li>
        <li>Postman</li>
        <li>Robo 3T</li>
        <li>Firefox</li>
      </ul>
    </Layout>
  )
}

export default About
