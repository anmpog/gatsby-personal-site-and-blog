/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const ContentSection = ({ containerStyles, sectionTitle, children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        mb: [5, null, 9],
        gap: [3, null, 4],
        justifyContent: 'flex-start',
        width: '100%',
        ...containerStyles,
      }}
    >
      {sectionTitle ? <h5 sx={{ m: 0 }}>{sectionTitle}</h5> : null}
      {children}
    </Flex>
  )
}

export default ContentSection
