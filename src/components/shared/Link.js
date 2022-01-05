/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'

export default function Link({ children, to, ...props }) {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        {...props}
        to={to}
        activeClassName='active'
        partiallyActive={to == '/blog' ? true : null}
        sx={{
          color: 'muted',
          textDecoration: 'none',
          '&.active': {
            color: 'primary',
            textDecoration: 'underline',
            fontWeight: 'bold'
          },
        }}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a {...props} href={to} rel='noreferrer' target='_blank'>
      {children}
    </a>
  )
}
