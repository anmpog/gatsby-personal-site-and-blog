/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/breakpoints'
import Link from './shared/Link'
import { jsx, ThemeProvider, Container, Box } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

// Hook for detecting click/touch outside of nav
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

// Burger button
const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  width: 1.75rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    height: 0.1rem;
    background: ${props => props.theme.colors.primary};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-of-type {
      width: 1.75rem;
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-of-type(2) {
      width: ${({ open }) => (open ? '1.75rem' : '1.5rem')};
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-of-type(3) {
      width: ${({ open }) => (open ? '1.75rem' : '1.25rem')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const Burger = ({ open, openToggler }) => {
  return (
    <StyledButton open={open} onClick={() => openToggler(!open)}>
      <div />
      <div />
      <div />
    </StyledButton>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggler: PropTypes.func.isRequired,
}

// Menu/wrapper for nav elements/links
const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e9e9ea;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  min-width: 75%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  > nav {
    display: flex;
    flex-direction: column;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 2rem 0;
    letter-spacing: 0.25rem;
    color: #23242b;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }
`

const SlideoutMenu = ({ open, navElements }) => {
  return (
    <StyledMenu open={open}>
      <nav>
        <ul>
          {navElements.map((link, index) => {
            return (
              <li
                key={index}
                sx={{
                  listStyle: 'none',
                  my: 5,
                }}
              >
                <Link
                  to={link.link}
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </StyledMenu>
  )
}

SlideoutMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  navElements: PropTypes.array.isRequired,
}

// Mobile Nav component
const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

//
// Main navigation component
//
const MainNav = ({ ...props }) => {
  const navLinkData = useStaticQuery(graphql`
    query navLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  let {
    site: {
      siteMetadata: { menuLinks },
    },
  } = navLinkData

  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <MobileNavWrapper>
        <Burger open={open} openToggler={setOpen} />
        <SlideoutMenu open={open} ref={node} navElements={menuLinks} />
      </MobileNavWrapper>
      <Box as='nav'>
        <ul
          sx={{
            display: ['none', 'none', 'flex'],
            justifyContent: 'flex-end',
            margin: 0,
            padding: 0,
          }}
        >
          {menuLinks.map((link, index) => {
            return (
              <li
                key={index}
                sx={{
                  listStyle: 'none',
                  fontSize: '20px',
                  marginRight: '2%',
                  '&:last-of-type': {
                    marginRight: 0,
                  },
                }}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </Box>
    </ThemeProvider>
  )
}

export default MainNav
