import { Binoculars } from 'phosphor-react'
import { Text } from '@/components/Text'

import * as S from './styles'

export function Explore() {
  return (
    <S.Container>
      <S.Header>
        <Binoculars size={32} />
        <Text as="h2" size="2xl">
          Explorar
        </Text>
      </S.Header>

      <S.Content></S.Content>
    </S.Container>
  )
}
