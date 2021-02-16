import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavLink = styled(Link)`
  color: inherit;
  margin-right: 2.5rem;
  font-size: 1.25rem;
  font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: .25rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.current-page {
    color: #ff206e;
    border-bottom: 2px solid #ff70a2;
    font-weight: 600;
  }
`

const HeaderNav = () => {
  return (
    <ul>
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
