/** @jsx jsx */
import { Box, jsx } from 'theme-ui'

const BurgerDiv = ({ open }) => {
  return (
    <Box
      sx={{
        height: '2px',
        width: '100%',
        backgroundColor: 'primary',
        borderRadius: '1px',
        margin: '0px',
        transition: 'all 0.3s linear',
        position: 'relative',
        transformOrigin: '1px',
        '&:nth-of-type(1)': {
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        },
        '&:nth-of-type(2)': {
          opacity: open ? '0' : '1',
          transform: open ? 'translateX(20px)' : 'translateX(0)',
        },
        '&:nth-of-type(3)': {
          transform: open ? 'rotate(-45deg)' : 'rotate(0)',
        },
      }}
    />
  )
}

export default BurgerDiv
