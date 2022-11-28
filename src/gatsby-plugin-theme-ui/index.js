import { darken } from '@theme-ui/color'

const theme = {
  borders: ['1px'],
  borderStyles: ['solid', 'dashed'],
  borderWidths: [1, 4],
  colors: {
    text: '#0A0A0A',
    background: '#333333',
    primary: '#EE562F',
    lightPrimary: '#F17455',
    secondary: '#F2AF29',
    lightSecondary: '#F5BE51',
    muted: '#E0E0CE',
    gray: '#474747',
    darken: '#E0E0CE',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Merriweather, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2.125rem',
    '3rem',
    '3.5rem',
    '4rem',
  ],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    heading: 1.25,
    body: 1.5,
  },
  radii: [],
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  sizes: {
    container: '1200px',
  },
  space: [0, 4, 8, 16, 24, 32, 40],
  zIndices: [],
  breakpoints: ['520px', '768px', '800px', '1000px', '1120px'],
  layout: {},
  styles: {
    root: {
      fontSize: '20px',
      fontFamily: 'body',
      lineHeight: 'body',
      p: {
        color: 'darken',
        lineHeight: [1.25, 1.3, 'body'],
        marginTop: 0,
        marginBottom: 4,
        code: {
          backgroundColor: 'darken',
          color: 'text',
          padding: 1,
        },
      },
      div: {
        section: {
          marginBottom: 6,
          padding: 3,
        },
      },
      h1: {
        color: 'primary',
        fontSize: [4, 5, 6, null, 7],
        fontWeight: '900',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginTop: 0,
        marginBottom: 5,
        a: {
          color: 'inherit',
        },
      },
      h2: {
        color: 'primary',
        fontSize: [3, 4, 5, null, 6],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginTop: 0,
        marginBottom: 4,
        a: {
          color: 'inherit',
        },
      },
      h3: {
        color: 'primary',
        fontSize: [3, null, 4],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginTop: 0,
        marginBottom: 3,
        a: {
          color: 'inherit',
        },
      },
      h4: {
        color: 'primary',
        fontSize: [2, null, 3],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginTop: 0,
        marginBottom: 3,
        a: {
          color: 'inherit',
        },
      },
      h5: {
        color: 'primary',
        fontSize: [2, 3],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginTop: 0,
        marginBottom: 3,
        a: {
          color: 'inherit',
        },
      },
      h6: {
        color: 'primary',
        fontSize: [1, 2],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        marginTop: 0,
        marginBottom: 3,
      },
      ul: {
        color: 'text',
        padding: 0,
      },
      li: {
        color: 'primary',
        listStyle: 'square',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
      },
      a: {
        color: 'muted',
        textDecoration: 'none',
        // '&::before': {
        //   content: '"\\00B7"',
        //   marginRight: '3px',
        //   visibility: 'hidden',
        // },
        '&:hover': {
          color: darken('muted', 0.1),
        },
        '&.active': {
          color: 'primary',
          '&:hover': {
            color: darken('primary', 0.1),
          },
          '&::before': {
            visibility: 'visible',
          },
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
      backgroundColor: 'darken',
      color: 'text',
      lineHeight: 'body',
    },
  },
  ol: {
    color: 'text',
  },

  blockquote: {
    borderLeftColor: 'primary',
    borderLeftStyle: 0,
    borderLeftWidth: 1,
    padding: 2,
    backgroundColor: 'darken',
    p: {
      margin: 0,
    },
  },
  box: {
    contentSection: {
      marginBottom: 6,
      padding: [1, 2, 3],
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
  text: {
    text: {},
    heading: {},
  },
  links: {
    internalLink: {
      border: '2px solid red',
      color: 'muted',
      textDecoration: 'none',
      '&::before': {
        content: '"\\00B7"',
        marginRight: '3px',
        visibility: 'hidden',
      },
      '&.active': {
        color: 'primary',
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
