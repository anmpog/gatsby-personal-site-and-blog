import React from 'react'
import styled from '@emotion/styled'
import { FaTwitter, FaGithub } from 'react-icons/fa'

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f6;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  &:first-of-type {
    margin-right: 2rem;
  }

  svg {
    width: auto;
  }

  &:hover {
    opacity: .7;
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
        <FaTwitter color='#1DA1F2' size={36} />
      </SocialLink>
      <SocialLink
        href='https://github.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub color='#6e5494' size={36} />
      </SocialLink>
    </div>
  )
}

export default SocialLinks
