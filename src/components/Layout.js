/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import ExternalLink from './shared/ExternalLink'
import MainNav from './MainNav'

const Layout = ({ children }) => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gridTemplateRows: 'auto minmax(0, 1fr) auto',
        gridColumnGap: '1rem',
      }}
    >
      <header
        sx={{
          display: 'flex',
          width: '100%',
          margin: '0 auto',
          py: [3, null, 4],
          gridColumn: [
            'span 12',
            '2 / span 10',
            '2 / span 10',
            '2 / span 10',
            '4 / span 6',
          ],
          px: [2, 0],
          gridRowGap: 0,
        }}
      >
        <MainNav />
      </header>
      <main
        as='main'
        className='content-wrapper'
        sx={{
          gridColumn: [
            'span 12',
            '2 / span 10',
            '2 / span 10',
            '2 / span 10',
            '4 / span 6',
          ],
          px: [2, 0],
        }}
      >
        {children}
      </main>
      <Flex
        as='footer'
        sx={{
          gridColumn: [
            'span 12',
            '2 / span 10',
            '2 / span 10',
            '2 / span 10',
            '4 / span 6',
          ],
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'gray',
          width: '100%',
          height: theme.space[9],
          px: [2, null, 0],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p sx={{ fontSize: 0 }}>
          Made using{' '}
          <ExternalLink to={'https://www.gatsbyjs.com/gatsby-4/'}>
            GatsbyJS
          </ExternalLink>
          , <ExternalLink to={'https://mdxjs.com/'}>MDXJS</ExternalLink>, and{' '}
          <ExternalLink to={'https://theme-ui.com/'}>ThemeUI</ExternalLink>.
        </p>
      </Flex>
    </Container>
  )
}

export default Layout
