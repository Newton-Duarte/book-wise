import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  html: {
    height: '100dvh',
  },

  body: {
    height: '100dvh',
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  '#__next': {
    height: '100dvh',
  },
})
