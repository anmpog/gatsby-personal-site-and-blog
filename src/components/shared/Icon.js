import React from 'react'
import {
  MongoIcon,
  HTMLIcon,
  JavaScriptIcon,
  NodeJSIcon,
  ReactIcon,
  CSSIcon,
  GatsbyIcon,
  FirefoxIcon,
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
    default: 
    return null
  }
}

export default Icon
