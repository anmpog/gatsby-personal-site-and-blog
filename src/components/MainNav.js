/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Flex } from 'theme-ui'
import MobileNav from './Nav/MobileNav'
import InternalLink from './shared/InternalLink'

const MainNav = () => {
  const navLinkData = useStaticQuery(graphql`
    query navLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  let {
    site: {
      siteMetadata: { menuLinks },
    },
  } = navLinkData

  return (
    <Flex
      as='nav'
      sx={{
        width: '100%',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      <ul
        sx={{
          display: ['none', 'grid'],
          gridAutoFlow: 'row',
          gridTemplateColumns: `repeat(${menuLinks.length}, 1fr)`,
          gap: 3,
          margin: 0,
          px: 0,
          listStyle: 'none',
          alignItems: 'center',
          mt: `-${3}`,
        }}
      >
        {menuLinks.map(link => {
          return (
            <li key={link.name}>
              <InternalLink
                to={link.link}
                sx={{ fontSize: 2 }}
                isNavigation={true}
              >
                {link.name}
              </InternalLink>
            </li>
          )
        })}
      </ul>
      <MobileNav links={menuLinks} />
    </Flex>
  )
}

export default MainNav
