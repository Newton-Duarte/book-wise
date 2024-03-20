import { styled } from '@/styles'

export const Wrapper = styled('div', {
  p: {
    color: '$gray300',
    marginBottom: '$2',
  },

  '& + div': {
    marginTop: '$6',
  },
})

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '6.75rem 1fr',
  gap: '1rem',
  padding: '1.5rem 1.5rem',
  background: '$gray600',
  borderRadius: '8px',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 134,

  h3: {
    color: '$gray100',
  },

  span: {
    color: '$gray400',
  },
})

export const Details = styled('div', {
  gridColumn: 'span 2',
  marginTop: '$2',

  p: {
    color: '$gray300',
  },
})
