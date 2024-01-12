/** @jsx jsx */
import { Fragment } from 'react'
import SEO from '../components/SEO'
import { jsx } from 'theme-ui'
import Card from '../components/shared/Card'
import ContentSection from '../components/ContentSection'
import ResumeExperienceSection from '../components/ResumeExperienceSection'
import Bio from '../components/Bio.js'

const Index = ({ location }) => {
  return (
    <Fragment>
      <SEO title='Home' location={location} />
      <ContentSection>
        <h5 sx={{ mb: 0 }}>Bio</h5>
        <Bio />
      </ContentSection>
      <ContentSection>
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
      </ContentSection>
      <ContentSection>
        <h5 sx={{ mb: 0 }}>Projects</h5>
        <Card sx={{ variant: 'box.card.primary' }}>
          <p sx={{ textAlign: 'center' }}>
            This section is under construction. Check back again soon!
          </p>
        </Card>
      </ContentSection>
    </Fragment>
  )
}

export default Index
