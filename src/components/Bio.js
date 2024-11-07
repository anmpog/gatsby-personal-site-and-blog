/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { jsx, Flex, Box } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import SocialLinks from './SocialLinks'

const Bio = ({ containerStyles }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: WEBP
            layout: CONSTRAINED
          )
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const image = getImage(data.avatar)
  const { author } = data.site.siteMetadata

  return (
    <Box
      sx={{
        variant: 'box.card.primary',
        ...containerStyles,
      }}
    >
      <Flex
        sx={{
          gap: [3, null, 4],
          flexDirection: ['column', null, 'row'],
        }}
      >
        <Flex
          sx={{
            justifyContent: ['center', 'flex-start'],
            alignItems: ['center', null],
            flexDirection: ['column'],
          }}
        >
          <GatsbyImage
            image={image}
            alt={author.name}
            style={{
              maxWidth: 400,
              maxHeight: 400,
              outlineWidth: '1px',
              outlineStyle: 'solid',
              outlineColor: `${theme.colors.darken}`,
              borderRadius: '3px',
            }}
          />
          <SocialLinks sx={{ justifyContent: 'center', mt: 5 }} />
        </Flex>
        <Box sx={{ flexBasis: '66.66%' }}>
          <p>
            Hi, I'm Anthony! I'm a web developer based in Boulder, Colorado. I
            love collaborative environments, novel problems, and learning about
            new technologies. While I have worked as a full-stack developer, I
            am really fascinated by UI and UX. Pretty, accessible, performant,
            and elegant user interfaces make me swoon.
          </p>
          <p>
            I am primarily a JavaScript developer, and while I gravitate towards
            front-end development, I can create (and resolve!) bugs across the
            stack.
          </p>
          <p>
            Outside of coding, my interests include rock climbing, skiing,
            cycling, cooking, music, video games, watches, my cat Bean, and the
            Oxford comma.
          </p>
        </Box>
      </Flex>
    </Box>
  )
}

export default Bio
