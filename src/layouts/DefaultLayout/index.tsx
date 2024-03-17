import { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/Sidebar'

import * as S from './styles'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Sidebar />
      {children}
    </S.Container>
  )
}
