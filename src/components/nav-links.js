import React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
  return (
    <nav>
      <Link to='/' className='nav-link' activeClassName='current-page'>
        Home
      </Link>
      <Link to='/about' className='nav-link' activeClassName='current-page'>
        About
      </Link>
      <Link to='/projects' className='nav-link' activeClassName='current-page'>
        Projects
      </Link>
      <Link to='/blog' className='nav-link' partiallyActive={true}  activeClassName='current-page'>
        Blog
      </Link>
    </nav>
  )
}

export default NavLinks
