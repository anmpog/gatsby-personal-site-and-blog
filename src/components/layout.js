import React from 'react'
import HeaderNav from '../components/header-nav'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div
      style={{
        margin: `${rhythm(1)} auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: `rgba(245, 245, 245, .85)`,
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
        <h1>anmpog.dev</h1>
        {location.pathname !== rootPath && <h3>{title}</h3>}
      </header>
      <HeaderNav />
      <main>{children}</main>
      <footer>
        Built with Gatsby
      </footer>
    </div>
  )
}

export default Layout
