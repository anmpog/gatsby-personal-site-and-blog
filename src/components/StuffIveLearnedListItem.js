/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './shared/Card'

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
      rel='noreferrer'
    >
      <Card
        variant='box.card.primary'
        hoverEffect={true}
        sx={{ height: '100%' }}
      >
        <h5 sx={{ color: 'secondary' }}>{courseTitle}</h5>
        <h6 sx={{ color: 'muted' }}>{courseProvider}</h6>
        <h6 sx={{ color: 'muted' }}>{courseAuthor}</h6>
      </Card>
    </a>
  )
}

export default StuffIveLearnedListItem
