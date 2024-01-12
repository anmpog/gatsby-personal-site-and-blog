/** @jsx jsx */
import { jsx, Badge } from 'theme-ui'

const SkillBadge = ({ children, props }) => {
  return (
    <Badge variant='primary' {...props}>
      {children}
    </Badge>
  )
}

export default SkillBadge
