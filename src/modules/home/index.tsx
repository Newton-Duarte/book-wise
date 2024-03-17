import { BookCard } from '@/components/BookCard'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { Text } from '@/components/Text'
import { booksReviews } from '@/data/booksReviews'

import * as S from '@/styles/pages/Home.styles'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import { useRouter } from 'next/router'
import { EXPLORE_ROUTE } from '@/constants/app-routes'

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
          <S.PopularBooksHeader>
            <Text size="sm">Livros populares</Text>
            <button type="button" onClick={() => router.push(EXPLORE_ROUTE)}>
              Ver todos
              <CaretRight size={16} />
            </button>
          </S.PopularBooksHeader>

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
