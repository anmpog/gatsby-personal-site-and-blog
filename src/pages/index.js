/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { jsx } from 'theme-ui'
import Card from '../components/shared/Card'
import ContentSection from '../components/ContentSection'
import ResumeExperienceSection from '../components/ResumeExperienceSection'
import Bio from '../components/Bio'
// import StuffIveLearnedListItem from '../components/StuffIveLearnedListItem'

const Index = ({ location }) => {
  return (
    <Layout>
      <SEO title='Home' location={location} />
      <ContentSection
        leftRail={<Bio />}
        rightRail={
          <Card variant='box.card.primary'>
            <p>
              Hi, I'm Anthony! I'm a web developer based in Boulder, Colorado. I
              love collaborative environments, novel problems, and learning
              about new technologies. While I have worked as a full-stack
              developer, I am really fascinated by UI and UX. Pretty,
              accessible, performant, and elegant user interfaces make me swoon.
            </p>
            <p>
              I am primarily a JavaScript developer, and while I gravitate
              towards front-end development, I can create (and resolve!) bugs
              across the stack.
            </p>
            <p>
              Outside of coding, my interests include rock climbing, skiing,
              cycling, cooking, music, video games, watches, my cat Bean, and
              the Oxford comma.
            </p>
          </Card>
        }
      />
      <ContentSection
        rightRailContainerStyles={{
          gap: [3, null, 4],
        }}
        rightRail={
          <React.Fragment>
            <h5 sx={{ mb: 0 }}>Experience</h5>
            <ResumeExperienceSection
              company={'Watchtower Solutions'}
              siteUrl={'https://www.yourwatchtower.com/'}
              jobTitle={'Software Engineer'}
              startDate={'December 2021'}
              endDate={'April 2023'}
              jobDescription={`Worked as a member of a small team that designed and developed new
          features in a rapid product development cycle with React/Typescript.
          Worked in React/Typescript to build new features for public safety
          data collection and dissemination tools.`}
              skills={[
                'JavaScript',
                'React',
                'TypeScript',
                'Theme UI',
                'Apollo GQL',
                'Prisma ORM',
                'GitLab',
                'Contentful',
                'GatsbyJS',
              ]}
            />
            <ResumeExperienceSection
              company={'Novvum Consulting'}
              siteUrl={'https://www.novvum.io/'}
              jobTitle={'Junior Front End Engineer'}
              startDate={'June 2021'}
              endDate={'December 2021'}
              jobDescription={`Worked in GatsbyJS and Contentful CMS to add content and features to
            sites for clients. Worked independently with clients as necessary to
            implement features and content changes Dramatically improved site
            performance and UX in several sites by implementing CSS solutions in
            place of existing JavaScript-based animations.`}
              skills={[
                'JavaScript',
                'React',
                'GatsbyJS',
                'Emotion',
                'Github',
                'Contentful',
                'Tailwind CSS',
                'Theme UI',
              ]}
            />
          </React.Fragment>
        }
      />
      <ContentSection
        rightRail={
          <React.Fragment>
            <h5 sx={{ mb: 0 }}>Projects</h5>
            <Card sx={{ variant: 'box.card.primary' }}>
              <p sx={{ textAlign: 'center' }}>
                This section is under construction. Check back again soon!
              </p>
            </Card>
          </React.Fragment>
        }
      />
      {/* <ContentSection
        leftRail={<h5 sx={{ color: 'muted', pt: 4 }}>Resources</h5>}
        rightRail={
          <React.Fragment>
            <Grid
              as='ul'
              // columns={[1, null, 2]}
              sx={{
                gridTemplateColumns: ['1fr', null, 'repeat(2, minmax(0, 1fr))'],
                margin: 0,
                padding: 0,
                gap: [3, null, 4],
                gridAutoRows: '1fr',
              }}
            >
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
            </Grid>
          </React.Fragment>
        }
      /> */}
    </Layout>
  )
}

export default Index
