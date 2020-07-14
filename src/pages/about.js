import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ({ location }) => {
  return (
    <Layout title='About Me' location={location}>
    <SEO title='About Me' location={location} />
      <div>
        <p>
          I'm Anthony! I'm a self-taught web developer who lives in Boulder, Colorado. My coding journey started when I was forced to use a really crappy piece of software every day and I thought, "Hmmm. I could do a better job of making an app than this..." It turns out that the joke is on me: it's not that easy to make applications.
        </p>

        <p>
          I'm a fairly well-adjusted person outside my interest in coding. I enjoy climbing, skiing, bicycles, cooking, video games, watches, kitty cats (and animals in general... but cats are the dopest animals), unironically using skier-bro lingo from the early 2000s... you probably get the picture.
        </p>

        <p>
          I strongly believe that our professional endeavors should be informed and guided by our ethical beliefs. I was initially drawn to coding in part because it felt like a "democratic" skillset. I want to be involved in projects that help people and make the world a better place - not just things that improve a company's bottom line.
        </p>
      </div>
    </Layout>
  )
}

export default About