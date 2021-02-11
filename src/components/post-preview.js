import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => {
  return (
    <Link
      to={post.slug}
    >
      <article
        key={post.slug}
      >
        <header>
          <h3>{post.title}</h3>
          <time>
            {post.date}
          </time>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.description,
            }}
          />
        </section>
      </article>
    </Link>
  )
}

export default PostPreview
