import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '6.75rem 1fr',
  gap: '1rem',
  padding: '1.25rem 1.5rem',
  background: '$gray600',
  borderRadius: '8px',
  marginBottom: '$10',
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  h3: {
    fontWeight: 'bold',
    color: '$gray100',
  },

  p: {
    color: '$gray300',
  },

  span: {
    color: '$gray400',
  },
})
