import { ComponentProps } from 'react'
import { styled } from '@/styles'

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  cursor: 'pointer',
  color: '$gray200',
  fontWeight: 'bold',
  fontSize: '$md',

  svg: {
    color: '$gray200',
  },

  '&:hover': {
    color: '$gray400',

    svg: {
      color: '$gray400',
    },
  },
})

export interface ButtonLinkProps extends ComponentProps<typeof Button> {}

Button.displayName = 'ButtonLink'
