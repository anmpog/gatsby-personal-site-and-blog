/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'theme-ui'

const ExternalLink = ({ to, children, ...props }) => {
  return (
    <Link
      href={to}
      target='blank'
      rel='external'
      variant={'links.externalLink'}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ExternalLink
