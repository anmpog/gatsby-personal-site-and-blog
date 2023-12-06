/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { jsx, Flex } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import SocialLinks from './SocialLinks'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const image = getImage(data.avatar)
  const { author } = data.site.siteMetadata

  return (
    <Flex
      sx={{
        variant: 'box.card.primary',
        maxWidth: ['auto', null, 'mediumLarge'],
        flexDirection: 'column',
      }}
    >
      <h5 sx={{ textAlign: 'center', color: 'primary' }}>{author.name}</h5>
      <GatsbyImage
        image={image}
        alt={author.name}
        style={{
          width: theme.space[10],
          borderRadius: '50%',
          alignSelf: 'center',
          outlineWidth: '1px',
          outlineStyle: 'solid',
          outlineColor: `${theme.colors.darken}`,
        }}
      />
      <p sx={{ mt: 3, mb: 4 }}>
        Written by <strong>{author.name}</strong> {author.summary}
      </p>
      <SocialLinks sx={{ justifyContent: ['center', null, null] }} />
    </Flex>
  )
}

export default Bio
