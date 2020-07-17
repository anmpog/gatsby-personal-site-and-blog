import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const LandingText = ({ location }) => {
  return (
    <>
      <h1
        css={css`
          margin: 8.25rem auto 2rem;
          max-width: 40rem;
          padding: 2.5rem;
          border: 1.25rem solid;
          border-radius: 2px;
        `}
      >
        <article>
          Hi, I'm Anthony. I'm a web developer based in Boulder, CO. I'm excited about building, helping, and sharing. Let's make something cool together!
        </article>
      </h1>
      <nav
        css={css`
        display: flex;
        width: 40rem;
        margin: 0 auto;
        justify-content: space-around;

        & > a {
          color: inherit;
          font-size: 1.25rem;
          border: 3px solid;
          padding: .75rem;
          border-radius: 2px;
        }

        & > a:hover {

        }
      `}
      >
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
    </>
  )
}

export default LandingText