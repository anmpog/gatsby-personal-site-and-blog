/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const ContentSection = ({ containerStyles, children }) => {
  return (
    <Flex
      sx={{
        mb: [5, null, 9],
        flexDirection: 'column',
        gap: [3, null, 4],
        justifyContent: 'flex-start',
        width: '100%',
        ...containerStyles,
      }}
    >
      {children}
    </Flex>
  )
}

export default ContentSection
