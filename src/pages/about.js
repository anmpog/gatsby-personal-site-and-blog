import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HTMLIcon, JavaScriptIcon, NodeJSIcon, ReactIcon, MongoIcon, CSSIcon, GatsbyIcon, FirefoxIcon } from '../assets/dev-icons'

const About = ({ location }) => {
  return (
    <Layout>
      <SEO title='About Me' location={location} />
      <section className='about-section'>
        <h2 className='about-heading'>Stuff about me</h2>
        <div className='about-content'>
          <p>
            I'm Anthony! I'm a self-taught web developer who lives in Boulder,
            Colorado. I am primarily a JavaScript developer, and I gravitate
            towards front-end development (but I can break things in NodeJS as well). I am also interested in – but not very experienced with – design. Please feel free to contact me via social media if you want to chat about anything!
          </p>

          <p>
            Outside coding, my interests include climbing, skiing, riding bikes,
            cooking, making/consuming music, video games, watches, my cat Bean, being unnecessarily verbose, and
            using the word "rad" unironically.
          </p>
        </div>
      </section>

      <section className='about-section'>
        <h2 className='about-heading'>Stuff I Use</h2>
        <div className='about-content'>
          <ul>
            <li className='icons'>
              <JavaScriptIcon />
            </li>
            <li className='icons'>
              <NodeJSIcon />
            </li>
            <li className='icons'>
              <ReactIcon />
            </li>
            <li className='icons'>
              <CSSIcon />
            </li>
            <li className='icons'>
              <HTMLIcon />
            </li>
            <li className='icons'>
              <MongoIcon />
            </li>
            <li className='icons'>
              <GatsbyIcon />
            </li>
            <li className='icons'>
              <FirefoxIcon />
            </li>
          </ul>
        </div>
      </section>

      <section className='about-section'>
        <h2 className='about-heading'>Stuff I Like</h2>
        <div className='about-content'>
          <ul className=' flex-col'>
            <li className='flex-stagger'>
              <p>authors:</p>
              <p className='flex-grow'>Cormac McCarthy, Dostoevsky, Alexandre Dumas</p>
            </li>
            <li className='flex-stagger'>
              <p>artists:</p>
              <p className='flex-grow'>All Them Witches, Jason Isbell, ERRA</p>
            </li>
            <li className='flex-stagger'>
              <p>films:</p>
              <p className='flex-grow'>There Will Be Blood, What Dreams May Come, Hereditary</p>
            </li>
            <li className='flex-stagger'>
              <p>bikes:</p>
              <p className='flex-grow'>Pivot Cycles, Parlee</p>
            </li>
            <li className='flex-stagger'>
              <p>games:</p>
              <p className='flex-grow'>League of Legends, Escape from Tarkov, Battlefield</p>
            </li>
          </ul>
        </div>
      </section>

      <section className='about-section'>
        <h2 className='about-heading'>Stuff I've Learned</h2>
        <div className='about-content'>
          <ul className=' flex-col'>
            <a
              href='https://frontendmasters.com/courses/web-development-v2/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>Complete Intro to Web Development, v2</h4>
                <p>Frontend Masters</p>
                <p>Brian Holt</p>
              </li>
            </a>
            <a
              href='https://frontendmasters.com/courses/css-grids-flexbox/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>CSS Grids and Flexbox for Responsive Web Design</h4>
                <p>Frontend Masters</p>
                <p>Jen Kramer</p>
              </li>
            </a>
            <a
              href='https://frontendmasters.com/courses/js-fundamentals-functional-v2/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>JavaScript: From Fundamentals to Functional JS, v2</h4>
                <p>Frontend Masters</p>
                <p>Bianca Gandolfo</p>
              </li>
            </a>
            <a
              href='https://frontendmasters.com/courses/javascript-hard-parts-v2/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>JavaScript: The Hard Parts, v2</h4>
                <p>Frontend Masters</p>
                <p>Will Sentance</p>
              </li>
            </a>
            <a
              href='https://frontendmasters.com/courses/node-js/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>Introduction to Node.js</h4>
                <p>Frontend Masters</p>
                <p>Scott Moss</p>
              </li>
            </a>
            <a
              href='https://ui.dev/react/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>React</h4>
                <p>ui.dev</p>
                <p>Tyler McGinnis</p>
              </li>
            </a>
            <a
              href='https://ui.dev/react-hooks/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>React Hooks</h4>
                <p>ui.dev</p>
                <p>Tyler McGinnis</p>
              </li>
            </a>
            <a
              href='https://ui.dev/advanced-javascript/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>Advanced JavaScript</h4>
                <p>ui.dev</p>
                <p>Tyler McGinnis</p>
              </li>
            </a>
            <a
              href='https://ui.dev/modern-javascript/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='content-course'>
                <h4>Modern JavaScript</h4>
                <p>ui.dev</p>
                <p>Tyler McGinnis</p>
              </li>
            </a>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default About
