import { darken } from '@theme-ui/color'

const theme = {
  borders: ['1px'],
  borderStyles: ['solid', 'dashed'],
  borderWidths: [1, 4],
  colors: {
    text: '#0A0A0A',
    background: '#23242b',
    primary: '#EE562F',
    lightPrimary: '#F17455',
    secondary: '#F2AF29',
    lightSecondary: '#F5BE51',
    muted: '#E0E0CE',
    gray: '#3D3D3D',
    darken: '#E0E0CE',
    darkCard: '#424349',
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Merriweather, serif',
    monospace: 'Menlo, monospace',
    logo: 'Calistoga, serif'
  },
  fontSizes: [
    '0.75em',
    '1em',
    '1.125em',
    '1.5em',
    '2.125em',
    '3em',
    '3.5em',
    '4em',
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    heading: 1.2,
    body: 1.4,
  },
  radii: ['0.5rem'],
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  sizes: {
    container: '1616px',
    small: '128px',
    medium: '256px',
    mediumLarge: '384px',
    large: '512px',
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128, 256, 512],
  zIndices: [],
  breakpoints: ['520px', '760px', '800px', '1200px', '1500'],
  badges: {
    primary: {
      color: 'text',
      backgroundColor: 'secondary',
      fontSize: 1,
      px: 3,
      py: 1,
      borderRadius: '1rem',
    },
  },
  layout: {},
  styles: {
    root: {
      fontSize: '16px',
      fontFamily: 'body',
      lineHeight: 'body',
      p: {
        fontSize: 1,
        color: 'darken',
        lineHeight: 'body',
        marginTop: 0,
        marginBottom: 0,
        '& + p': {
          marginTop: [3, null, 4],
        },
        code: {
          backgroundColor: 'rgb(1, 22, 39)',
          color: 'rgb(128, 203, 196)',
          padding: '2px 6px',
          borderRadius: '4px',
          whiteSpace: 'wrap',
        },
      },
      div: {
        section: {
          marginBottom: 6,
          padding: 3,
        },
      },
      h1: {
        color: 'darken',
        fontSize: [4, 5, 6, null, 7],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginBottom: 5,
        a: {
          color: 'inherit',
        },
      },
      h2: {
        color: 'darken',
        fontSize: [3, 4, 5, null, 6],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginBottom: 4,
        a: {
          color: 'inherit',
        },
      },
      h3: {
        color: 'darken',
        fontSize: [3, null, 4],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginBottom: 3,
        a: {
          color: 'inherit',
        },
      },
      h4: {
        color: 'darken',
        fontSize: [2, null, 3],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginBottom: 3,
        a: {
          color: 'inherit',
        },
      },
      h5: {
        color: 'darken',
        fontSize: [2, 3],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginBottom: 3,
        a: {
          color: 'inherit',
        },
      },
      h6: {
        color: 'darken',
        fontSize: [1, 2],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginBottom: 2,
      },
      ul: {
        color: 'text',
      },
      li: {
        color: 'darken',
        marginBottom: 0,
        fontSize: 1,
      },
      a: {
        textDecoration: 'none',
      },
      time: {
        variant: 'styles.root.p',
        fontStyle: 'italic',
      },
      blockquote: {
        borderLeftColor: 'primary',
        borderLeftStyle: 0,
        borderLeftWidth: 1,
        padding: 2,
        backgroundColor: 'darken',
        mx: 0,
        p: {
          margin: 0,
          color: 'text',
        },
      },
    },
  },
  small: {
    fontSize: 0,
  },
  a: {
    color: 'secondary',
  },
  img: {},
  pre: {
    borderColor: 'gray',
    borderStyle: 1,
    borderWidth: 0,
    backgroundColor: 'darken',
    color: 'text',
    lineHeight: 'body',
    overflow: 'auto',
    padding: 3,
    code: {
      backgroundColor: 'rgb(1, 22, 39)',
      color: 'rgb(128, 203, 196)',
      padding: '2px 6px',
      borderRadius: '4px',
      whiteSpace: 'wrap',
    },
  },
  ol: {
    color: 'text',
  },
  box: {
    card: {
      primary: {
        padding: [3, null, 4],
        backgroundColor: 'darkCard',
        boxShadow: 2,
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray',
      },
      transparent: {
        variant: 'box.card.primary',
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
  buttons: {
    backgroundColor: 'primary',
    primary: {
      textTransform: 'capitalize',
    },
    secondary: {
      textTransform: 'capitalize',
      color: 'background',
      backgroundColor: 'secondary',
      ':hover': {
        color: 'background',
      },
    },
    close: {},
    icon: {},
    menu: {},
  },
  links: {
    internalLink: {
      color: 'muted',
    },
    navLink: {
      variant: 'links.internalLink',
      '&::before': {
        content: '"\\00B7"',
        marginRight: '3px',
        visibility: 'hidden',
      },
      '&.active': {
        color: 'primary',
        textDecoration: 'none',
        '&::before': {
          visibility: 'visible',
        },
      },
    },
    externalLink: {
      color: 'secondary',
      textDecoration: 'none',
      '&:hover': {
        color: darken('secondary', 0.1),
      },
    },
  },
  forms: {
    label: {
      color: 'text',
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: 2,
    },
    input: {
      color: 'text',
    },
    select: {
      color: 'text',
    },
    textarea: {
      color: 'text',
    },
    slider: {
      color: 'primary',
      backgroundColor: 'muted',
    },
  },
}

export default theme
