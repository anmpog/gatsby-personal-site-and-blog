/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Card from './shared/Card'
import SkillBadge from './SkillBadge'
import ExternalLink from './shared/ExternalLink'

const ResumeExperienceSection = ({
  company,
  siteUrl,
  jobTitle,
  startDate,
  endDate,
  jobDescription,
  skills,
}) => {
  return (
    <ExternalLink to={siteUrl}>
      <Card variant='box.card.primary' hoverEffect={true}>
        <h5 sx={{ color: 'darken', marginTop: 0 }}>{company}</h5>
        <Flex
          sx={{
            gap: [1, null, 3],
            flexDirection: ['column', null, 'row'],
            mb: 2,
          }}
        >
          <h6 sx={{ color: 'darken', marginTop: 0, marginBottom: 0 }}>
            {jobTitle}
          </h6>
          <time>
            {startDate} – {endDate}
          </time>
        </Flex>
        <p>{jobDescription}</p>
        {skills && (
          <ul sx={{ p: 0, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {skills.map((skill, index) => (
              <SkillBadge key={index}>{skill}</SkillBadge>
            ))}
          </ul>
        )}
      </Card>
    </ExternalLink>
  )
}

export default ResumeExperienceSection
