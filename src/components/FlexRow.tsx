import { ComponentProps } from 'react'
import { styled } from '@/styles'

export const FlexRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})

export interface FlexRowProps extends ComponentProps<typeof FlexRow> {}
