import React from 'react'
import SocialLinks from './SocialLinks'
import MainNav from './MainNav'
import { jsx, Container } from 'theme-ui'

const Layout = ({ title, children }) => {
  return (
    <Container className='content-wrapper' sx={{ p: [3, 4, 5] }}>
      <header>
        <MainNav />
      </header>
      <main className='main-content'>{children}</main>
      <footer>
        <SocialLinks />
      </footer>
    </Container>
  )
}

export default Layout
