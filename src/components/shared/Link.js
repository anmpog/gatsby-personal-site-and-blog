/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'

export default function Link({ children, to, ...props }) {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  console.log('The to: ', to)
  console.log('The internal: ', internal)

  // Use Gatsby Link for internal links, and <a> for others
  return (
    <GatsbyLink
      {...props}
      to={to}
      activeClassName='active'
      partiallyActive={to == '/blog' ? true : null}
      sx={{
        color: 'muted',
        textDecoration: 'none',
        '&::before': {
          content: '"\\00B7"',
          marginRight: '3px',
          visibility: 'hidden',
        },
        '&.active': {
          color: 'primary',
          '&::before': {
            visibility: 'visible',
          },
        },
      }}
    >
      {children}
    </GatsbyLink>
  )
}
