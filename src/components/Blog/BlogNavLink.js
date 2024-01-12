/** @jsx jsx */
import { jsx } from 'theme-ui'
import InternalLink from '../shared/InternalLink'
import { darken } from '@theme-ui/color'

const BlogNavLink = ({ to, linkText, rel, postTitle }) => {
  const formattedSlug = to ? `../${to}` : null
  return (
    <InternalLink
      to={formattedSlug}
      rel={rel}
      sx={{
        variant: 'box.card.transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: '1px',
        borderColor: 'muted',
        padding: 2,
        pointerEvents: !to ? 'none' : 'all',
        backgroundColor: !to ? darken('background', 0.1) : 'background',
        fontStyle: !to ? 'italic' : 'none',
        '&:hover': {
          backgroundColor: darken('darkCard', 0.1),
          cursor: !to ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s',
        },
        '&:not([href])': {
          opacity: '0.7',
        },
      }}
    >
      <span sx={{ fontSize: 2, mb: 3, color: 'darken' }}>{linkText}</span>
      <p
        sx={{
          fontSize: 1,
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
          m: 0,
          p: 2,
        }}
      >
        {postTitle}
      </p>
    </InternalLink>
  )
}

export default BlogNavLink
