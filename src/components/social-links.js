import React from 'react'
import styled from '@emotion/styled'
import { FaTwitter, FaGithub } from 'react-icons/fa'

const SocialLink = styled.a`
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
  
  &:hover {
    opacity: .7;
    transition: opacity .3s;
  }
`

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <SocialLink
        href='https://twitter.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter color='#f5f5f6' size={36} />
      </SocialLink>
      <SocialLink
        href='https://github.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub color='#f5f5f6' size={36} />
      </SocialLink>
    </div>
  )
}

export default SocialLinks
