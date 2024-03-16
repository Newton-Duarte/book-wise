import { BookCard } from '@/components/BookCard'
import { Text } from '@/components/Text'

import * as S from '@/styles/pages/Home.styles'
import { ChartLineUp } from 'phosphor-react'

const bookText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis libero explicabo. Enim magni excepturi aliquam ullam voluptates nemo eligendi, nesciunt expedita unde! Aliquid, molestias molestiae. Nulla, odit ipsum. Temporibus veritatis corrupti dignissimos, ut eligendi ipsum autem ea non nostrum fugit asperiores error voluptatum earum odio sequi reiciendis eum excepturi.'

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
          <BookCard
            user={{
              id: '1',
              name: 'Newton Duarte',
              avatarURL: 'https://github.com/newton-duarte.png',
            }}
            book={{
              id: '1',
              title: 'O Hobbit',
              description: bookText,
              author: 'J.R.R. Tolkien',
              imageURL: '/images/o-hobbit.png',
              rating: 4.5,
              date: '',
            }}
          />

          <BookCard
            user={{
              id: '2',
              name: 'John Doe',
              avatarURL: 'https://github.com/newton-duarte.png',
            }}
            book={{
              id: '1',
              title: 'O guia do mochileiro das galáxias',
              description: bookText,
              author: 'Douglas Adams',
              imageURL: '/images/o-guia-do-mochileiro-das-galaxias.png',
              rating: 4.5,
              date: '',
            }}
          />
        </S.BooksList>
      </S.Content>
    </S.Container>
  )
}
