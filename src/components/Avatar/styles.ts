import { styled } from '@/styles'
import NextImage from 'next/image'
import { getSizeInRem } from './utils'

export const Image = styled(NextImage, {
  borderRadius: '$full',
  border: '2px solid #7FD1CC',
  objectFit: 'cover',

  variants: {
    size: {
      sm: {
        width: getSizeInRem('sm'),
        height: getSizeInRem('sm'),
      },
      md: {
        width: getSizeInRem('md'),
        height: getSizeInRem('md'),
      },
      lg: {
        width: getSizeInRem('lg'),
        height: getSizeInRem('lg'),
      },
      xl: {
        height: getSizeInRem('xl'),
        width: getSizeInRem('xl'),
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
