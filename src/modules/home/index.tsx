import Image from 'next/image'
import { useRouter } from 'next/router'
import { BookCard } from '@/components/BookCard'
import { ChartLineUp } from 'phosphor-react'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import { EXPLORE_ROUTE, PROFILE_ROUTE } from '@/constants/app-routes'
import { LastRead } from './LastRead'
import { ButtonLink } from '@/components/ButtonLink'
import { HomePageProps } from '@/pages/home'
import { ellipsisText } from '@/utils/ellipsisText'

import * as S from './styles'

export function HomeModule({
  lastUserRating,
  ratings,
  popularBooks,
}: HomePageProps) {
  const router = useRouter()

  return (
    <S.Container>
      <S.Header>
        <ChartLineUp size={32} />
        <Text as="h2" size="2xl">
          Início
        </Text>
      </S.Header>

      <S.Content>
        <S.BooksList>
          {!!lastUserRating && (
            <>
              <S.SectionHeader>
                <Text size="sm">Sua última leitura</Text>
                <ButtonLink onClick={() => router.push(PROFILE_ROUTE)}>
                  Ver todas
                </ButtonLink>
              </S.SectionHeader>
              <LastRead rating={lastUserRating} />
            </>
          )}
          <Text size="sm">Avaliações mais recentes</Text>
          <S.ScrollBox>
            {ratings.map((rating) => (
              <BookCard key={rating.id} rating={rating} />
            ))}
          </S.ScrollBox>
        </S.BooksList>

        <S.PopularBooks>
          <S.SectionHeader>
            <Text size="sm">Livros populares</Text>
            <ButtonLink onClick={() => router.push(EXPLORE_ROUTE)}>
              Ver todos
            </ButtonLink>
          </S.SectionHeader>

          <S.ScrollBox>
            {popularBooks.map((book) => (
              <S.PopularBook key={book.id}>
                <Image
                  src={book.cover_url}
                  width={64}
                  height={94}
                  alt={book.title}
                />

                <S.PopularBookInfo>
                  <div>
                    <Text>{ellipsisText(book.title, 35)}</Text>
                    <Text as="span">{book.author}</Text>
                  </div>
                  <Rating />
                </S.PopularBookInfo>
              </S.PopularBook>
            ))}
          </S.ScrollBox>
        </S.PopularBooks>
      </S.Content>
    </S.Container>
  )
}
