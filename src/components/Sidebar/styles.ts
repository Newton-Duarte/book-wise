import { styled } from '@/styles'

export const Container = styled('aside', {
  backgroundColor: '$gray700',
  padding: '$10',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  maxHeight: 'calc(100dvh - 2.5rem)',
})

export const Menu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '1.5rem',

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
    color: '$gray400',
    borderLeft: '4px solid transparent',
    paddingLeft: '1rem',

    svg: {
      color: '$gray400',
    },

    '&.active': {
      color: '$gray100',
      fontWeight: 'bold',
      borderLeft: '4px solid $purple100',

      svg: {
        color: '$gray100',
      },
    },

    '&:hover': {
      color: '$gray100',

      svg: {
        color: '$gray100',
      },
    },

    '&:last-of-type': {
      marginTop: 'auto',
      alignSelf: 'center',

      svg: {
        color: '$green100',
      },

      '&:hover': {
        color: '$green100',
      },
    },

    '&.logout': {
      svg: {
        color: '$danger',
      },

      '&:hover': {
        color: '$danger',
      },
    },
  },
})
