import Image from 'next/image'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'
import { dayjs } from '@/lib/dayjs'
import { Rating as UserRating } from '@/@types/Rating'
import { getBookRating } from '@/modules/explore/utils'

import * as S from './styles'

export type BookReviewProps = {
  rating: UserRating
}

export function BookReview({ rating }: BookReviewProps) {
  return (
    <S.Wrapper>
      <Text as="p">{dayjs(rating.created_at).fromNow()}</Text>

      <S.Container>
        <Image src={rating.book.cover_url} width={98} height={134} alt="" />

        <S.Header>
          <FlexCol>
            <Text as="h3" size="lg">
              {rating.book.title}
            </Text>
            <Text size="sm" as="span">
              {rating.book.author}
            </Text>
          </FlexCol>

          <Rating rate={getBookRating(rating.book)} />
        </S.Header>
        <S.Details>
          <Text size="sm">{rating.description}</Text>
        </S.Details>
      </S.Container>
    </S.Wrapper>
  )
}
