/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './shared/Link'
import { jsx, Box, Flex } from 'theme-ui'

// Hook for detecting click/touch outside of nav
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

//
// Main navigation component
//

const BurgerDiv = () => {
  return (
    <div
      sx={{
        height: '2px',
        color: 'red',
        width: '100%',
        border: '2px solid red',
      }}
    />
  )
}
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

  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <Box as='nav' ref={node} sx={{ position: 'relative' }}>
      <button
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          padding: '0px',
          color: 'primary',
          height: '32px',
          width: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 1,
          display: ['flex', 'none'],
          zIndex: 15,
        }}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <BurgerDiv />
        <BurgerDiv />
        <BurgerDiv />
      </button>
      <Flex
        as='ul'
        sx={{
          justifyContent: ['space-evenly', 'flex-end'],
          alignItems: 'center',
          position: ['absolute', 'static'],
          flexDirection: ['column', 'row'],
          backgroundColor: 'background',
          width: '100%',
          height: [open ? '175px' : null, '45px'],
          zIndex: 10,
          margin: 0,
          padding: 0,
        }}
      >
        {menuLinks.map((link, index) => {
          return (
            <li
              key={index}
              sx={{
                listStyle: 'none',
                fontSize: '20px',
                marginRight: '2%',
                display: [open ? 'block' : 'none', 'block'],
                '&:last-of-type': {
                  marginRight: 0,
                },
              }}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        })}
      </Flex>
    </Box>
  )
}

export default MainNav
