/** @jsx jsx */
import { css, Global } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Box, Flex, jsx } from 'theme-ui'
import { useOnClickOutside } from '../../hooks/use-on-click-outside'
import Link from '../shared/Link'
import MenuButton from './MenuButton'

export const pinBody = css`
  body {
    overflow-y: hidden;
  }

  .content-wrapper {
    filter: blur(5px);
  }
`

const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  const closeMenu = () => {
    setOpen(false)
  }
  const toggleMenuOpen = () => {
    setOpen(!open)
  }

  useOnClickOutside(mobileMenuRef, e => closeMenu(e))

  useEffect(() => {
    const onResize = () => {
      setOpen(false)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Box
      ref={mobileMenuRef}
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
      }}
    >
      <MenuButton open={open} handleToggle={toggleMenuOpen} />
      {open && <Global styles={pinBody} />}
      <Flex
        sx={{
          position: 'absolute',
          display: ['flex', 'none'],
          top: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          flexDirection: ['column', 'row'],
          backgroundColor: ['darken', 'transparent'],
          height: ['100vh', '100px'],
          maxHeight: '100vh',
          width: '75vw',
          transform: open ? 'translateX(0vw)' : 'translateX(75vw)',
          transition: 'all 0.3s ease-out',
          visibility: open ? 'visible' : 'hidden',
          zIndex: 100,
        }}
      >
        <ul
          sx={{
            padding: '0px',
            margin: 'auto 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {links.map(link => (
            <Link
              to={link.link}
              key={link.name}
              styles={{
                textAlign: 'center',
                marginBottom: 3,
                '&:last-of-type': {
                  marginBottom: '0px',
                },
              }}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </Flex>
    </Box>
  )
}

export default MobileNav
