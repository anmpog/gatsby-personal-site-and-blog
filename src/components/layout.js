import React from 'react'
import HeaderNav from '../components/header-nav'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'
import SocialLinks from '../components/social-links'

const Layout = ({ title, children }) => {
  return (
    <div
      style={{
        margin: `${rhythm(1)} auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: `rgba(245, 245, 245, .85)`,
        minHeight: `calc(100vh - 3rem)`,
        borderRadius: `2px`
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
          box-shadow: -4px 6px .25rem #FF70A2;
        `}
      >
        <Link to='/'>
          <h1>{title}</h1>
        </Link>
      </header>
      <HeaderNav />
      <main>{children}</main>
      <SocialLinks />
    </div>)
}

export default Layout
