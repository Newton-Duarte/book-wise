import { BookCard } from '@/components/BookCard'
import { Text } from '@/components/Text'

import * as S from '@/styles/pages/Home.styles'
import { ChartLineUp } from 'phosphor-react'

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <ChartLineUp size={32} />
        <Text as="h2" size="2xl">
          Início
        </Text>
      </S.Header>

      <S.Content>
        <Text size="sm">Avaliações mais recentes</Text>
        <S.BooksList>
          <BookCard />
        </S.BooksList>
      </S.Content>
    </S.Container>
  )
}
