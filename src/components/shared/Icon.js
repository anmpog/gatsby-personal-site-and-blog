/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  GithubIcon,
  GitlabIcon,
  LinkedInIcon,
  EyeIcon,
} from '../../assets/icons'

const Icon = ({ icon, ...props }) => {
  switch (icon) {
    case 'eye':
      return <EyeIcon {...props} />
    case 'github':
      return <GithubIcon {...props} />
    case 'gitlab':
      return <GitlabIcon {...props} />
    case 'linkedin':
      return <LinkedInIcon {...props} />
    default:
      return null
  }
}

export default Icon
