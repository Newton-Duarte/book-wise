import { ElementType, ReactNode } from 'react'
import { CaretLeft } from 'phosphor-react'

import * as S from './styles'

type BackLink = {
  as?: ElementType
  children: ReactNode
  onClick: () => void
}

export function BackLink({ children, onClick, ...rest }: BackLink) {
  return (
    <S.Button type="button" onClick={onClick} {...rest}>
      <CaretLeft size={20} />
      {children}
    </S.Button>
  )
}
