import Image from 'next/image'
import { useRouter } from 'next/router'
import { BookCard } from '@/components/BookCard'
import { ChartLineUp } from 'phosphor-react'
import { Text } from '@/components/Text'
import { booksReviews } from '@/data/booksReviews'
import { Rating } from '@/components/Rating'
import { EXPLORE_ROUTE, PROFILE_ROUTE } from '@/constants/app-routes'
import { LastRead } from './LastRead'
import { ButtonLink } from '@/components/ButtonLink'

import * as S from './styles'

export function Home() {
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
          <S.SectionHeader>
            <Text size="sm">Sua última leitura</Text>
            <ButtonLink onClick={() => router.push(PROFILE_ROUTE)}>
              Ver todas
            </ButtonLink>
          </S.SectionHeader>
          <LastRead book={booksReviews[1]?.book} />
          <Text size="sm">Avaliações mais recentes</Text>
          <S.ScrollBox>
            {booksReviews.map((bookReview) => (
              <BookCard
                key={bookReview.id}
                user={bookReview.user}
                book={bookReview.book}
              />
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
            {[1, 2, 3, 4, 5, 6].map((book) => (
              <S.PopularBook key={book}>
                <Image
                  src="/images/o-hobbit.png"
                  width={64}
                  height={94}
                  alt=""
                />

                <S.PopularBookInfo>
                  <div>
                    <Text>A revolução dos bichos</Text>
                    <Text as="span">George Orwell</Text>
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
