import { ElementType, ReactNode } from 'react'
import { CaretRight } from 'phosphor-react'

import * as S from './styles'

type ButtonLink = {
  as?: ElementType
  children: ReactNode
  onClick: () => void
}

export function ButtonLink({ children, onClick, ...rest }: ButtonLink) {
  return (
    <S.Button type="button" onClick={onClick} {...rest}>
      {children}
      <CaretRight size={16} />
    </S.Button>
  )
}
