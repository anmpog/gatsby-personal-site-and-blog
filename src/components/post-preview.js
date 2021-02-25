import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => {
  return (
    <Link to={post.slug}>
      <article className='post-preview' key={post.slug}>
        <header>
          <h2>{post.title}</h2>
          <time dateTime={post.date}>
            {post.date}
          </time>
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
