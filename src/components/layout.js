import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'
import HeaderNav from '../components/header-nav'
import SocialLinks from '../components/social-links'

const Layout = ({ title, children }) => {
  const breakpoints = [576, 768, 992, 1200]

  const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
  )

  return (
    <div
      css={{
        margin: `${rhythm(1)} auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: `rgba(245, 245, 245, .75)`,
        minHeight: `calc(100vh - 3rem)`,
        borderRadius: `2px`,
        display: 'flex',
        flexDirection: 'column',
        [mq[0]]: {
          padding: 0,
          margin: 0,
        }
      }}
    >
      <header
        className='header-style'
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin-bottom: 2rem;
          margin-top: 0;
          height: 6rem;
          box-shadow: -4px 6px 0.25rem #ff70a2;


          @media (max-width: 576px) {
            padding: 10px;
            box-shadow: none;
            justify-content: center;
            margin-bottom: 1rem;
          }
        `}
      >
        <Link to='/'>
          <h1>{title}</h1>
        </Link>
      </header>
      <HeaderNav />
      <main>
        {children}
      </main>
      <footer
        css={css`
          margin-top: auto;
        `}
      >
        <SocialLinks />
      </footer>
    </div >
  )
}

export default Layout
