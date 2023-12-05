/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './shared/Card'
import InternalLink from './shared/InternalLink'

const PostPreview = ({ post }) => {
  const { slug, title, date, description } = post
  return (
    <InternalLink to={`/blog/${slug}`}>
      <Card hoverEffect={true}>
        <article key={slug}>
          <header sx={{ marginBottom: 2 }}>
            <h5 sx={{ color: 'muted' }}>{title}</h5>
            <time dateTime={date}>{date}</time>
          </header>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </article>
      </Card>
    </InternalLink>
  )
}

export default PostPreview
