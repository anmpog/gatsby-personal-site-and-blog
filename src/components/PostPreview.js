/** @jsx jsx */
import React from 'react'
import Link from './shared/Link'
import { jsx } from 'theme-ui'

const PostPreview = ({ post }) => {
  return (
    <Link to={post.slug}>
      <article className='post-preview' key={post.slug}>
        <header>
          <h2 sx={{ variant: 'styles.h2' }}>{post.title}</h2>
          <time dateTime={post.date}>
            {post.date}
          </time>
          <hr></hr>
        </header>
        <p
          dangerouslySetInnerHTML={{
            __html: post.description,
          }}
        />
      </article>
    </Link>
  )
}

export default PostPreview
