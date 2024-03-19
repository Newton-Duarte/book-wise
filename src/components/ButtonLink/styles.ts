import { ComponentProps } from 'react'
import { styled } from '@/styles'

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  cursor: 'pointer',
  color: '$purple100',
  fontWeight: 'bold',
  fontSize: '$sm',

  svg: {
    color: '$purple100',
  },

  '&:hover': {
    color: '$white',

    svg: {
      color: '$white',
    },
  },
})

export interface ButtonLinkProps extends ComponentProps<typeof Button> {}

Button.displayName = 'ButtonLink'
