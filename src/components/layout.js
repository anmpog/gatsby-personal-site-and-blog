/** @jsx jsx */
import React from 'react'
import SocialLinks from './SocialLinks'
import MainNav from './MainNav'
import { jsx, Container } from 'theme-ui'

const Layout = ({ title, children }) => {
  return (
    <Container className='content-wrapper' sx={{ p: [1, 4, 5] }}>
      <header sx={{ marginBottom: ['75px'] }}>
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
