import React from 'react'
import styled from '@emotion/styled'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLink = styled.a`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialLinks = () => {
  return (
    <div>
      <SocialLink
        href='https://twitter.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter color='#1DA1F2' />
      </SocialLink>
      <SocialLink
        href='https://github.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub color='#6e5494' />
      </SocialLink>
    </div>
  )
}

export default SocialLinks
