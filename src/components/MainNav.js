/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/breakpoints'
import Link from './shared/Link'
import { jsx, Box, MenuButton } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

// Hook for detecting click/touch outside of nav
// export function useOnClickOutside(ref, handler) {
//   useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return
//       }
//       handler(event)
//     }
//     document.addEventListener('mousedown', listener)
//     return () => {
//       document.removeEventListener('mousedown', listener)
//     }
//   }, [ref, handler])
// }

//
// Main navigation component
//
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

  return (
    <Box as='nav'>
      <ul
        sx={{
          display: ['none', 'none', 'flex'],
          justifyContent: 'flex-end',
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
    </Box>
  )
}

export default MainNav
