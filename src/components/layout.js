/** @jsx jsx */
import SocialLinks from './SocialLinks'
import MainNav from './MainNav'
import { jsx, Container } from 'theme-ui'

const Layout = ({ title, children }) => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        sx={{
          display: 'flex',
          width: '100%',
          margin: '0 auto',
          height: ['75px', '100px'],
          padding: ['0px', '0 50px'],
        }}
      >
        <MainNav />
      </header>
      <Container className='content-wrapper'>
        <main
          className='main-content'
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            px: [2, '50px'],
            flexDirection: 'column',
          }}
        >
          {children}
        </main>
      </Container>
      <footer sx={{ height: '70px', marginTop: '3rem' }}>
        <SocialLinks />
      </footer>
    </Container>
  )
}

export default Layout
