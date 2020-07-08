import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'


const NavLink = styled(Link)`
  color: inherit;
  list-style: none;
  margin-right: 2.5rem;
  text-decoration: none;
  font-size: 1.25rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.current-page {
    color: red;
    border-bottom: 2px solid #FF70A2;
    text-shadow: -1px 1px blue;
  }
`

const HeaderNav = () => {
  return (
    <ul
      css={css`
        margin: 0;
        display: flex;
      `}
      style={{ 
        marginBottom: rhythm(2) 
      }}
    >
  <NavLink to='/' activeClassName='current-page'>Home</NavLink>
  <NavLink to='/about' activeClassName='current-page'>About</NavLink>
  <NavLink to='/blog' partiallyActive={true} activeClassName='current-page'>Blog</NavLink>
    </ul >
  )
}

export default HeaderNav