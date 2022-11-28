/** @jsx jsx */
import Layout from '../components/layout'
import SEO from '../components/seo'
import Icon from '../components/shared/Icon'
import { jsx, Flex } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

// Components
const StuffIUseListItem = ({ icon }) => {
  return (
    <Flex
      as='li'
      sx={{
        mb: [3, null, null, 6],
        display: 'flex',
        justifyContent: ['center', null, null, null, 'flex-start'],
        flex: '0 1 33.33%',
      }}
    >
      <Flex
        sx={{
          borderWidth: ['0px', null, null, '2px'],
          borderStyle: 'solid',
          borderColor: 'darken',
          borderRadius: '100%',
          padding: ['0px', null, null, 4],
        }}
      >
        <Icon icon={icon} color={theme.colors.secondary} />
      </Flex>
    </Flex>
  )
}

const StuffILikeListItem = ({ listTitle, listItems }) => {
  return (
    <li
      sx={{
        display: 'flex',
        marginBottom: [4, null, null, 6],
        color: 'darken',
        listStyle: 'none',
        flexDirection: ['column'],
        alignItems: ['flex-start'],
      }}
    >
      <h4
        sx={{
          fontWeight: 'bold',
          alignSelf: 'flex-start',
          mb: 2,
          color: 'secondary',
        }}
      >
        {listTitle}:
      </h4>
      <ul
        sx={{
          flex: '1 1 80%',
          flexWrap: 'wrap',
          display: 'flex',
          padding: 0,
          margin: 0,
          flexDirection: ['column', null, 'row', 'row'],
          justifyContent: 'flex-start',
        }}
      >
        {listItems.map((listItem, index) => {
          return (
            <li
              key={index}
              sx={{
                mr: 3,
                color: 'darken',
                listStyle: 'none',
              }}
            >
              {listItem}
              {index !== listItems.length - 1 ? ',' : ''}
            </li>
          )
        })}
      </ul>
    </li>
  )
}

const StuffIveLearnedListItem = ({
  courseUrl,
  courseTitle,
  courseProvider,
  courseAuthor,
}) => {
  return (
    <a
      href={courseUrl}
      referrer='noopener noreferrer'
      target='_blank'
      sx={{
        textDecoration: 'none',
        '&:hover': {
          opacity: '0.95',
          transition: 'opacity ease-in 0.2s',
        },
      }}
      rel='noreferrer'
    >
      <Flex
        sx={{
          flexDirection: 'column',
          marginBottom: [2, 3, null, 4],
          backgroundColor: 'muted',
          borderRadius: '.3rem',
          padding: 3,
        }}
      >
        <h5>{courseTitle}</h5>
        <h6 sx={{ color: 'background' }}>{courseProvider}</h6>
        <h6 sx={{ color: 'background' }}>{courseAuthor}</h6>
      </Flex>
    </a>
  )
}

const About = ({ location }) => {
  return (
    <Layout>
      <SEO title='About Me' location={location} />
      <Flex
        variant='box.contentSection'
        sx={{ flexDirection: ['column', null, null, null, 'row'] }}
      >
        <h3 sx={{ flexBasis: '25%', mr: 3, textTransform: 'lowercase' }}>
          Stuff about me
        </h3>
        <Flex sx={{ flexDirection: 'column', flexBasis: '75%' }}>
          <p>
            I'm Anthony! I'm a self-taught web developer who lives in Boulder,
            Colorado. I am primarily a JavaScript developer, and I gravitate
            towards front-end development (but I can break things in NodeJS as
            well). I enjoy crafting aesthetically pleasing, functional user
            interfaces and experiences. Please feel free to contact me via
            social media if you want to chat about anything!
          </p>

          <p>
            Outside of coding, my interests include rock climbing, skiing,
            cycling, cooking, making/consuming music, video games, watches, my
            cat Bean, being unnecessarily verbose, and using the word "rad"
            unironically.
          </p>
        </Flex>
      </Flex>

      <Flex
        variant='box.contentSection'
        sx={{ flexDirection: ['column', null, null, null, 'row'] }}
      >
        <h3 sx={{ flexBasis: '25%', mr: 3, textTransform: 'lowercase' }}>
          Stuff I Use
        </h3>
        <ul
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexBasis: '75%',
            margin: 0,
            padding: 0,
          }}
        >
          <StuffIUseListItem icon='javascript' />
          <StuffIUseListItem icon='node' />
          <StuffIUseListItem icon='react' />
          <StuffIUseListItem icon='css' />
          <StuffIUseListItem icon='html' />
          <StuffIUseListItem icon='mongo' />
          <StuffIUseListItem icon='gatsby' />
          <StuffIUseListItem icon='firefox' />
        </ul>
      </Flex>

      <Flex
        variant='box.contentSection'
        sx={{ flexDirection: ['column', null, null, null, 'row'] }}
      >
        <h3 sx={{ flexBasis: '25%', mr: 3, textTransform: 'lowercase' }}>
          Stuff I Like
        </h3>
        <Flex sx={{ justifyContent: 'flex-start', flexBasis: '75%' }}>
          <ul
            sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
              padding: 0,
              width: '100%',
            }}
          >
            <StuffILikeListItem
              listTitle='authors'
              listItems={[
                'Cormac McCarthy',
                'Fyodor Dostoevsky',
                'Alexandre Dumas',
              ]}
            />
            <StuffILikeListItem
              listTitle='artists'
              listItems={['All Them Witches', 'Jason Isbell', 'ERRA']}
            />
            <StuffILikeListItem
              listTitle='films'
              listItems={[
                'There Will Be Blood',
                'What Dreams May Come',
                'Hereditary',
              ]}
            />
            <StuffILikeListItem
              listTitle='games'
              listItems={['League of Legends', 'Escape from Tarkov', 'Tetris']}
            />
          </ul>
        </Flex>
      </Flex>

      <Flex
        variant='box.contentSection'
        sx={{ flexDirection: ['column', null, null, null, 'row'] }}
      >
        <h3 sx={{ flexBasis: '25%', mr: 3, textTransform: 'lowercase' }}>
          Stuff I've Learned
        </h3>
        <ul sx={{ flexBasis: '75%', margin: 0, padding: 0 }}>
          <StuffIveLearnedListItem
            courseUrl='https://frontendmasters.com/courses/web-development-v2/'
            courseTitle='Complete Intro to Web Development, v2'
            courseProvider='Frontend Masters'
            courseAuthor='Brian Holt'
          />
          <StuffIveLearnedListItem
            courseUrl='https://frontendmasters.com/courses/css-grids-flexbox/'
            courseTitle='CSS Grids and Flexbox for Responsive Web Design'
            courseProvider='Frontend Masters'
            courseAuthor='Jen Kramer'
          />
          <StuffIveLearnedListItem
            courseUrl='https://frontendmasters.com/courses/js-fundamentals-functional-v2/'
            courseTitle='JavaScript: From Fundamentals to Functional JS, v2'
            courseProvider='Frontend Masters'
            courseAuthor='Bianca Gandolfo'
          />
          <StuffIveLearnedListItem
            courseUrl='https://frontendmasters.com/courses/javascript-hard-parts-v2/'
            courseTitle='JavaScript: The Hard Parts, v2'
            courseProvider='Frontend Masters'
            courseAuthor='Will Sentance'
          />
          <StuffIveLearnedListItem
            courseUrl='https://frontendmasters.com/courses/node-js/'
            courseTitle='Introduction to Node.js'
            courseProvider='Frontend Masters'
            courseAuthor='Scott Moss'
          />
          <StuffIveLearnedListItem
            courseUrl='https://ui.dev/react/'
            courseTitle='React'
            courseProvider='ui.dev'
            courseAuthor='Tyler McGinnis'
          />
          <StuffIveLearnedListItem
            courseUrl='https://ui.dev/react-hooks/'
            courseTitle='React Hooks'
            courseProvider='ui.dev'
            courseAuthor='Tyler McGinnis'
          />
          <StuffIveLearnedListItem
            courseUrl='https://ui.dev/advanced-javascript/'
            courseTitle='Advanced JavaScript'
            courseProvider='ui.dev'
            courseAuthor='Tyler McGinnis'
          />
          <StuffIveLearnedListItem
            courseUrl='https://ui.dev/modern-javascript/'
            courseTitle='Modern JavaScript'
            courseProvider='ui.dev'
            courseAuthor='Tyler McGinnis'
          />
        </ul>
      </Flex>
    </Layout>
  )
}

export default About
