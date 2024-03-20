import { ComponentProps } from 'react'
import * as S from './styles'

export interface TagProps extends ComponentProps<typeof S.Container> {
  label: string
}

export function Tag({ label, ...props }: TagProps) {
  return <S.Container {...props}>{label}</S.Container>
}
