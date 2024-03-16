import { styled } from '..'

export const Container = styled('div', {
  maxWidth: '90rem',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '598px 1fr',
  padding: '$5',
  margin: '0 auto',

  '@media (max-width: 1023px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',

  '> img': {
    objectFit: 'cover',
    borderRadius: '$md',
    '&.logo': {
      position: 'absolute',
      top: '45%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  '@media (max-width: 1023px)': {
    display: 'none',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',
  maxWidth: '372px',
  width: '100%',
  margin: '0 auto',

  '> img.logo': {
    margin: '0 auto 2rem',

    '@media (min-width: 1023px)': {
      display: 'none',
    },
  },

  h2: {
    marginBottom: '$1',
  },

  ul: {
    marginTop: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    listStyle: 'none',

    li: {
      button: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '$gray600',
        height: '4.5rem',
        justifyContent: 'left',
        padding: '$5 $6',

        svg: {
          width: '2rem',
          height: '2rem',
        },

        '&:hover': {
          background: '$gray500 !important',
        },
      },
    },
  },
})
