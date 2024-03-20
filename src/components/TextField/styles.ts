import { styled } from '@/styles'

export const Container = styled('div', {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray500',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$green200',
    svg: {
      color: '$green200',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:has(svg)': {
    color: '$gray500',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
