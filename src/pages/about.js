import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ({ location }) => {
  return (
    <Layout title='About Me' location={location}>
    <SEO title='About Me' location={location} />
      <div>
        <p>
          I'm Anthony! I'm a self-taught web developer who lives in Boulder, Colorado. I am primarily a JavaScript developer, and I gravitate towards front-end development. Please feel free to contact me on my social media if you want to chat about anything! Also, please 🐻 with me while I develop this site! 
        </p>

        <p>
          Outside coding, my interests include climbing, skiing, bicycles, cooking, making/consuming music, video games, watches, kitty cats, unironically using skier-bro lingo from the early 2000s... you probably get the picture.
        </p>

        <p>
          I strongly believe that our professional endeavors should be informed and guided by our ethical beliefs. I am happiest when I am involved in projects that help people and make the world a better place - not just things that improve a company's bottom line. Black Lives Matter.
        </p>

        <h3>Tech</h3>
        <ul>
          <li>JavaScript ES6</li>
          <li>NodeJS</li>
          <li>React</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>

        <h3>Tools</h3>
        <ul>
          <li>GatsbyJS</li>
          <li>VSCode</li>
          <li>Postman</li>
          <li>Robo 3T</li>
          <li>Firefox</li>
        </ul>
      </div>
    </Layout>
  )
}

export default About