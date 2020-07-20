import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const PostPreview = ({ post }) => {
  return (
    <Link
      to={post.slug}
      css={css`
        color: inherit;
        text-decoration: none;
      `}
    >
      <article
        key={post.slug}
        css={css`
          margin-bottom: 2rem;
          border-radius: 1px;
          padding: 1.25rem;
          background-color: #a1f5e9;
          box-shadow: -4px 6px 0.25rem #ff70a2;
          @media (max-width: 576px) {
            box-shadow: none;
            padding: 10px;
          }
        `}
      >
        <header
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h3>{post.title}</h3>
          <time
            css={css`
              display: inline-block;
            `}
          >
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
