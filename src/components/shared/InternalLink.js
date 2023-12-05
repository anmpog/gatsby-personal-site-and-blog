/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const InternalLink = ({
  to,
  disabled,
  styles,
  children,
  isNavigation,
  ...props
}) => {
  return (
    <Link
      sx={{ variant: isNavigation ? 'links.navLink' : 'links.internalLink' }}
      activeClassName='active'
      partiallyActive={to === '/blog' ? true : false}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

export default InternalLink
