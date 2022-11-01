/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import Link from './shared/Link'
import { jsx, Flex } from 'theme-ui'
import MobileNav from './Nav/MobileNav'

const MainNav = ({ ...props }) => {
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
          gridTemplateColumns: 'repeat(4, auto)',
          gap: 3,
        }}
      >
        {menuLinks.map(link => {
          return (
            <li
              key={link.name}
              sx={{
                listStyle: 'none',
                fontSize: '20px',
                marginRight: '2%',
                '&:last-of-type': {
                  marginRight: 0,
                },
              }}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
      <MobileNav links={menuLinks} />
    </Flex>
  )
}

export default MainNav
