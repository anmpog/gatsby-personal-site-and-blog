/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  MongoIcon,
  HTMLIcon,
  JavaScriptIcon,
  NodeJSIcon,
  ReactIcon,
  CSSIcon,
  GatsbyIcon,
  FirefoxIcon,
  GithubIcon,
  GitlabIcon,
  VSCodeIcon,
  LinkedInIcon,
} from '../../assets/dev-icons'

const Icon = ({ icon, color, ...props }) => {
  switch (icon) {
    case 'mongo':
      return <MongoIcon color={color} {...props} />
    case 'html':
      return <HTMLIcon color={color} {...props} />
    case 'javascript':
      return <JavaScriptIcon color={color} {...props} />
    case 'node':
      return <NodeJSIcon color={color} {...props} />
    case 'react':
      return <ReactIcon color={color} {...props} />
    case 'css':
      return <CSSIcon color={color} {...props} />
    case 'gatsby':
      return <GatsbyIcon color={color} {...props} />
    case 'firefox':
      return <FirefoxIcon color={color} {...props} />
    case 'github':
      return <GithubIcon color={color} {...props} />
    case 'gitlab':
      return <GitlabIcon color={color} {...props} />
    case 'vscode':
      return <VSCodeIcon color={color} {...props} />
    case 'linkedin':
      return <LinkedInIcon color={color} {...props} />
    default:
      return null
  }
}

export default Icon
