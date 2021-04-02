import React from 'react'
import NavLinks from './nav-links'
import SocialLinks from '../components/social-links'
import MobileNav from './mobile-nav'
import DesktopNav from './desktop-nav'

const Layout = ({ title, children }) => {
  return (
    <div className='layout'>
      <header>
        {/* Passing component in like this is not ideal, need to refactor to use render-prop pattern */}
        <MobileNav navLinks={<NavLinks />} />
        <DesktopNav navLinks={<NavLinks />} />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <SocialLinks />
      </footer>
    </div>
  )
}

export default Layout
