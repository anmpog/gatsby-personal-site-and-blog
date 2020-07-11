import Typography from 'typography'

const typography = new Typography()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Typography is basically only being used to take advantage
// of the rhythm, scale options at this point. 

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
