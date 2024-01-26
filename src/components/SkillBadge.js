/** @jsx jsx */
import { jsx, Badge } from 'theme-ui'

const SkillBadge = ({ children, props }) => {
  return (
    <Badge as='li' variant='primary' {...props}>
      {children}
    </Badge>
  )
}

export default SkillBadge
