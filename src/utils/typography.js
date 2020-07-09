import Typography from 'typography'

const typography = new Typography({
  title: `anmpogSiteTheme`,
  // baseFontSize: `20px`,
  googleFonts: [
    {
      name: `Bungee`,
      styles: [
        `400`
      ]
    },
    {
      name: `Open Sans`,
      styles: [
        `300`,
        `300i`,
        `400`,
        `400i`,
        `600`
      ]
    }
  ],
    headerFontFamily: ['Bungee', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    bodyWeight: 300,
    includeNormalize: false,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
