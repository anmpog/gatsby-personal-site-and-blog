/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Link as ThemeUILink } from 'theme-ui'

const Link = ({ children, to, ...props }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
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
          color: 'muted',
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
        activeClassName='active'
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
