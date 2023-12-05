/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { useState } from 'react'
import theme from '../gatsby-plugin-theme-ui'
import Icon from './shared/Icon'
import { darken } from '@theme-ui/color'
import ExternalLink from './shared/ExternalLink'

const SocialLink = ({ icon, to, color = 'muted' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const curriedTheme = darken(theme.colors[color], 0.5)
  const darkenedColor = curriedTheme(theme)
  const iconColor = isHovered ? darkenedColor : theme.colors[color]

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <ExternalLink to={to}>
      <Icon
        icon={icon}
        width={theme.space[4]}
        color={iconColor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </ExternalLink>
  )
}

const SocialLinks = ({ color, ...props }) => {
  return (
    <Flex
      sx={{
        display: 'flex',
        gap: 5,
        alignItems: 'center',
      }}
      {...props}
    >
      <SocialLink
        to='https://github.com/anmpog'
        icon={'github'}
        color={color}
      />
      <SocialLink
        to='https://gitlab.com/anmpog'
        icon={'gitlab'}
        color={color}
      />
      <SocialLink
        to='https://linkedin.com/in/anthony-pogliano-4644b5280'
        icon={'linkedin'}
        color={color}
      />
    </Flex>
  )
}

export default SocialLinks
