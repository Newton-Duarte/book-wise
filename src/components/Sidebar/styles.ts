import { styled } from '@/styles'

export const Container = styled('aside', {
  backgroundColor: '$gray700',
  padding: '$10',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
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

    svg: {
      color: '$gray400',
    },

    '&.active': {
      color: '$gray100',
      fontWeight: 'bold',
      borderLeft: '4px solid $purple100',
      paddingLeft: '1rem',

      svg: {
        color: '$gray100',
      },
    },

    '&:hover': {
      svg: {
        color: '$gray100',
      },
      p: {
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
        p: {
          color: '$green100',
        },
      },
    },
  },
})
