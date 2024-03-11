import { styled } from '.'

export const Container = styled('div', {
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '598px 1fr',
  padding: '$5',

  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',

  '> img': {
    borderRadius: '$md',
    '&.logo': {
      position: 'absolute',
      top: '45%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  '@media (max-width: 600px)': {
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

        svg: {
          width: '2rem',
          height: '2rem',
        },
      },
    },
  },
})
