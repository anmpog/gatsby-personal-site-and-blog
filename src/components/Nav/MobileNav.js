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
      }}
    >
      <MenuButton open={open} handleToggle={toggleMenuOpen} />
      {open && <Global styles={pinBody} />}
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          flexDirection: ['column', 'row'],
          backgroundColor: ['darken', 'transparent'],
          height: ['100vh', '100px'],
          width: [open ? '75vw' : '0px', '100%'],
          transition: 'all 0.3s ease-out',
          overflow: 'hidden',
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
