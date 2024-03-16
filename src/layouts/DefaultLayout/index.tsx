import { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/Sidebar'

import * as S from './styles'
import { Text } from '@/components/Text'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Sidebar />
      {children}

      <Text>Livros Populares</Text>
    </S.Container>
  )
}
