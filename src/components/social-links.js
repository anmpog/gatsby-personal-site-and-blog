import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
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
        display: flex;
        justify-content: space-around;
        max-width: ${rhythm(12)};
        margin: 25px auto;
        font-size: 2rem;

        @media (max-width: 576px) {
          font-size: 1.5rem;
        }
      `}
    >
      <SocialLink
        href='https://twitter.com/anmpog'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter color='#1DA1F2' />
      </SocialLink>
      <SocialLink
        href='https://linkedin.com/in/anthony-pogliano'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin color='#2867b2' />
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
