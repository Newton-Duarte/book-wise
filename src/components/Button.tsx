import { styled } from '@/styles'

export const Button = styled('button', {
  border: 'none',
  background: '$gray600',
  height: '4.5rem',
  padding: '1.25rem 1.5rem',
  borderRadius: '8px',
  color: '$gray200',
  fontWeight: 'bold',
  fontSize: '$lg',
  cursor: 'pointer',

  '&:hover': {
    background: '$gray500',
  },
})
