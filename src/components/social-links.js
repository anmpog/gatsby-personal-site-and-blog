import React from 'react'
import { css } from '@emotion/core'
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
    <div
      css={css`
        margin: 0 33%;
        display: flex;
        padding: 0.5rem;
        justify-content: space-between;
      `}
    >
      <SocialLink
        href='https://twitter.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter size='2.25rem' color='#1DA1F2' />
      </SocialLink>
      <SocialLink
        href='https://linkedin.com/in/anthony-pogliano'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin size='2.25rem' color='#2867b2' />
      </SocialLink>
      <SocialLink
        href='https://github.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub size='2.25rem' color='#6e5494' />
      </SocialLink>
    </div>
  )
}

export default SocialLinks
