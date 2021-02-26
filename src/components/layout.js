import React from 'react'
import HeaderNav from '../components/header-nav'
import SocialLinks from '../components/social-links'

const Layout = ({ title, children }) => {
  // const breakpoints = [576, 768, 992, 1200]

  // const mq = breakpoints.map(
  //   bp => `@media (max-width: ${bp}px)`
  // )

  return (
    <div className='layout'>
      <header>
        <HeaderNav />
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
