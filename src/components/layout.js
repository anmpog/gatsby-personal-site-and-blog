/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import MainNav from './MainNav'
import theme from '../gatsby-plugin-theme-ui'

const Layout = ({ children }) => {
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
          height: [theme.space[8], theme.space[9]],
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
    </Container>
  )
}

export default Layout
