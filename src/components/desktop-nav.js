import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/breakpoints'

const StyledNav = styled.div`
@media (max-width: ${breakpoints.md}) {
  display: none;
}
`

const DesktopNav = ({ navLinks }) => {
  return (
    <StyledNav>
      {navLinks}
    </StyledNav>
  )
}

export default DesktopNav