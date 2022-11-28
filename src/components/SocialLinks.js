/** @jsx jsx */
import styled from '@emotion/styled'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { jsx } from 'theme-ui'

const SocialLink = styled.a`
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.95;
    transition: opacity 0.3s;
  }
`

const SocialLinks = () => {
  return (
    <div
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: ['center', null, 'flex-start'],
        px: '50px',
      }}
    >
      <SocialLink
        href='https://twitter.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter color='#f5f5f6' size={30} />
      </SocialLink>
      <SocialLink
        href='https://github.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub color='#f5f5f6' size={30} />
      </SocialLink>
    </div>
  )
}

export default SocialLinks
