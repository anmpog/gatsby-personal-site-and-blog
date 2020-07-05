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
        padding: 1rem;
        background-color: dodgerblue;
        box-shadow: -3px 2px .25rem red;
      `}
      >
        <header
          css={css`
          display: flex;
          justify-content: space-between;
        `}
        >
          <h3>

            {post.title}

          </h3>
          <time
            css={css`
            display: inline-block;
            margin-bottom: .75rem;
          `}
          >
            {post.date}
          </time>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.description
            }}
          />
        </section>
      </article>
    </Link>
  )
}

export default PostPreview