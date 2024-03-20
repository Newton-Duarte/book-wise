import Image from 'next/image'
import { Book } from '@/@types/Book'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'

import * as S from './styles'

export type BookReviewProps = {
  book: Book
}

export function BookReview({ book }: BookReviewProps) {
  return (
    <S.Wrapper>
      <Text as="p">Há 2 dias</Text>

      <S.Container>
        <Image src={book.imageURL} width={98} height={134} alt="" />

        <S.Header>
          <FlexCol>
            <Text as="h3" size="lg">
              {book.title}
            </Text>
            <Text size="sm" as="span">
              {book.author}
            </Text>
          </FlexCol>

          <Rating />
        </S.Header>
        <S.Details>
          <Text size="sm">{book.description}</Text>
        </S.Details>
      </S.Container>
    </S.Wrapper>
  )
}
