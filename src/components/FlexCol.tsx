import { ComponentProps } from 'react'
import { styled } from '@/styles'

export const FlexCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export interface FlexColProps extends ComponentProps<typeof FlexCol> {}
