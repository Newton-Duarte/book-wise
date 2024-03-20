import { styled } from '@/styles'

export const Container = styled('button', {
  all: 'unset',
  color: '$purple100',
  border: '1px solid $purple100',
  borderRadius: '$full',
  padding: '$1 $4',
  cursor: 'pointer',
  background: 'transparent',

  '&:hover': {
    background: '$purple200',
    color: '$gray100',
    transition: 'background 0.3s, color 0.3s',
  },

  '&.active': {
    background: '$purple200',
    color: '$gray100',
    borderColor: '$purple200',
  },
})
