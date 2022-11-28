/** @jsx jsx */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Link as ThemeUILink } from 'theme-ui'

const Link = ({ children, to, styles, ...props }) => {
  const linkType =
    to.startsWith('http://') || to.startsWith('https://')
      ? 'external'
      : 'internal'

  // console.log('the to value: ', to)
  // console.log('the link type: ', linkType)
  if (linkType === 'internal') {
    return (
      <GatsbyLink
        to={to}
        activeClassName='active'
        partiallyActive={to == '/blog' ? true : null}
        variant={'links.internalLink'}
        sx={{
          color: ['text', 'muted'],
          textDecoration: 'none',
          '&::before': {
            content: '"\\00B7"',
            marginRight: '3px',
            visibility: 'hidden',
          },
          '& .active': {
            color: 'primary',
            '&::before': {
              visibility: 'visible',
            },
          },
          ...styles,
        }}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }

  if (linkType === 'external') {
    return (
      <ThemeUILink
        href={to}
        target='blank'
        rel='external'
        variant={'links.externalLink'}
        {...props}
      >
        {children}
      </ThemeUILink>
    )
  }
}

export default Link
