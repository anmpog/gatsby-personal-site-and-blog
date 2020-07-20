import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const NavLink = styled(Link)`
  color: inherit;
  margin-right: 2.5rem;
  font-size: 1.25rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.current-page {
    color: #ff206e;
    border-bottom: 2px solid #ff70a2;
    text-shadow: -1px 1px #41ead4;
    font-weight: 600;
  }
`

const HeaderNav = () => {
  return (
    <ul
      css={css`
        margin: 0 0 ${rhythm(2)} 0;
        display: flex;
        @media (max-width: 576px) {
          justify-content: center;
          margin-bottom: ${rhythm(.75)}
        }
      `}

    >
      <NavLink to='/' activeClassName='current-page'>
        Home
      </NavLink>
      <NavLink to='/about' activeClassName='current-page'>
        About
      </NavLink>
      <NavLink to='/blog' partiallyActive={true} activeClassName='current-page'>
        Blog
      </NavLink>
    </ul>
  )
}

export default HeaderNav
