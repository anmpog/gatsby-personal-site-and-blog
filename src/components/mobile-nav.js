import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/breakpoints'

// Hook for detecting click/touch outside of nav
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};



// Burger button
const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width:  1.75rem;
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
    width: 1.75rem;
    height: 0.25rem;
    background: #ff206e;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, openToggler }) => {
  return (
    <StyledBurger open={open} onClick={() => openToggler(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  openToggler: PropTypes.func.isRequired
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
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
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
      // text-align: center;
    }
  }
`

const Menu = ({ open, navElements }) => {
  return (
    <StyledMenu open={open}>
      {navElements}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  navElements: PropTypes.object.isRequired
}



// Mobile Nav component
const NavWrapper = styled.div`
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const MobileNav = ({ navLinks }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false));

  return (
    <NavWrapper className='mobile-nav' ref={node}>
      <Burger open={open} openToggler={setOpen} />
      <Menu open={open} navElements={navLinks} />
    </NavWrapper >
  )
}

MobileNav.propTypes = {
  navLinks: PropTypes.object.isRequired
}

export default MobileNav