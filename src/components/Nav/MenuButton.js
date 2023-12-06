/** @jsx jsx */
import BurgerDiv from './BurgerDiv'
import { jsx } from 'theme-ui'

const MenuButton = ({ open, handleToggle }) => {
  return (
    <button
      onClick={handleToggle}
      sx={{
        width: '32px',
        height: '32px',
        margin: '15px',
        padding: '0',
        border: 'none',
        display: ['flex', 'none'],
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        background: 'transparent',
        cursor: 'pointer',
        zIndex: '101',
        right: '0',
        '&:focus': {
          outline: 'none',
        },
      }}
    >
      <BurgerDiv open={open} />
      <BurgerDiv open={open} />
      <BurgerDiv open={open} />
    </button>
  )
}

export default MenuButton
