/** @jsx jsx */
import React from 'react'
import Link from './shared/Link'
import { jsx, Box } from 'theme-ui'

const PostPreview = ({ post }) => {
  const { slug, title, date, description } = post
  return (
    <Link to={`/blog/${slug}`} sx={{ '&:hover': { opacity: '.95' } }}>
      <Box
        sx={{
          backgroundColor: 'muted',
          padding: 3,
          borderRadius: '.2rem',
          mx: 'auto',
          mb: [2, 3, null, 4]
        }}
      >
        <article key={slug}>
          <header sx={{ marginBottom: 4 }}>
            <h3>{title}</h3>
            <time
              dateTime={date}
              sx={{ color: 'background', fontWeight: 'bold' }}
            >
              {date}
            </time>
          </header>
          <p
            sx={{ color: 'background' }}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </article>
      </Box>
    </Link>
  )
}

export default PostPreview
