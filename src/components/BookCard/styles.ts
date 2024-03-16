import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '38rem',
})

export const Header = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2.5rem 1fr 6.25rem',
  alignItems: 'start',
  gap: '1rem',

  img: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    objectFit: 'cover',
  },

  p: {
    color: '$gray100',
  },

  span: {
    color: '$gray400',
  },
})

export const Content = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  marginTop: '2rem',
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  h3: {
    fontWeight: 'bold',
    color: '$gray100',
  },

  span: {
    color: '$gray400',
  },
})
