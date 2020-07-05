import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const PostPreview = ({ post }) => {
  return (
    <article
      key={post.slug}
      css={css`
        margin-bottom: 2rem;
        border-radius: 1px;
        padding: 1rem;
        background-color: dodgerblue;
<<<<<<< HEAD
        box-shadow: -3px 2px .25rem red;
=======
        box-shadow: -3px 2px .1rem red;
>>>>>>> b4016d75c37ce8db42b69901f7ddb79a02203f67

      `}
    >
      <header
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h3>
          <Link 
            to={post.slug}
            css={css`
              color: inherit;
              text-decoration: none;
            `}  
          >
            {post.title}
          </Link>
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
  )
}

export default PostPreview