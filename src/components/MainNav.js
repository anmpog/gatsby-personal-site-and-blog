/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Flex } from 'theme-ui'
import InternalLink from './shared/InternalLink'

const MainNav = () => {
  const navLinkData = useStaticQuery(graphql`
    query navElementsQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { menuLinks, title },
    },
  } = navLinkData

  return (
    <Flex
      as='nav'
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'secondary',
      }}
    >
      <h3
        sx={{
          margin: 0,
          fontSize: 3,
          fontFamily: 'logo',
          fontWeight: 300,
          pr: 1,
          color: 'transparent',
          backgroundColor: '#ed461d',
          backgroundImage: 'linear-gradient(315deg, #ed461d 40%, #f2af29 100%)',
          backgroundClip: 'text',
        }}
      >
        {title}
      </h3>
      <ul
        sx={{
          display: 'flex',
          gap: [2, 3],
          margin: 0,
          p: 0,
          listStyle: 'none',
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
    </Flex>
  )
}

export default MainNav
