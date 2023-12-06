/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const ContentSection = ({
  leftRail,
  rightRail,
  leftRailContainerStyles,
  rightRailContainerStyles,
}) => {
  return (
    <Flex
      sx={{
        mb: [5, null, 9],
        flexDirection: ['column', null, 'row'],
        gap: [3, null, 4],
      }}
    >
      <Flex
        sx={{
          flexBasis: '40%',
          flexDirection: 'column',
          ...leftRailContainerStyles,
        }}
      >
        {leftRail}
      </Flex>
      <Flex
        sx={{
          flexBasis: '60%',
          flexDirection: 'column',
          gap: [3, null, 4],
          ...rightRailContainerStyles,
        }}
      >
        {rightRail}
      </Flex>
    </Flex>
  )
}

export default ContentSection
