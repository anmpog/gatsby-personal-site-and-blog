import React from 'react'
import { css } from '@emotion/core'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <ul
      css={css`
        margin: 0 33%;
        display: flex;
        padding: .5rem;
        justify-content: space-between;
      `}
    >
      <a href='https://twitter.com/anmpog' target='_blank' rel='noreferrer'>
        <FaTwitter size='2.25rem' color='#1DA1F2' />
      </a>
      <a href='https://linkedin.com/in/anthony-pogliano' target='_blank' rel='noreferrer'>
        <FaLinkedin size='2.25rem' color='#2867b2' />
      </a>
      <a href='https://github.com/anmpog' target='_blank' rel='noreferrer'>
        <FaGithub size='2.25rem' color='#6e5494' />
      </a>
    </ul>
  )
}

export default SocialLinks