/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { darken } from '@theme-ui/color'

const Card = ({ children, hoverEffect, variant, ...props }) => {
  return (
    <Box
      variant={variant || 'box.card.primary'}
      sx={{
        '&:hover': {
          backgroundColor: hoverEffect ? darken('darkCard', 0.1) : null,
          transition: 'background-color 0.3s',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Card
