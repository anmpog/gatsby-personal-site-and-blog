/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import BlogNavLink from './BlogNavLink'

const BlogNavigation = ({ previous, next, containerStyles }) => {
  return (
    <footer
      sx={{
        mb: [3, null, 4],
        marginTop: 'auto',
        ...containerStyles,
      }}
    >
      <Grid
        as='nav'
        sx={{
          gridTemplateColumns: [
            'repeat(1, minmax(0, 1fr))',
            null,
            'repeat(3, minmax(0, 1fr))',
          ],
        }}
      >
        <BlogNavLink
          to={previous?.frontmatter?.slug}
          linkText={'← Last Post'}
          postTitle={
            previous?.frontmatter?.title || "You're on the first post!"
          }
          rel='prev'
        />
        <BlogNavLink to='../blog' linkText={'Blog Home'} />
        <BlogNavLink
          to={next?.frontmatter?.slug}
          linkText={'Next Post →'}
          postTitle={next?.frontmatter?.title || "You're on the last post!"}
          rel='next'
        />
      </Grid>
    </footer>
  )
}

export default BlogNavigation
