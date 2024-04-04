import Image from 'next/image'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'
import { Rating as RatingType } from '@/@types/Rating'
import { dayjs } from '@/lib/dayjs'
import { ellipsisText } from '@/utils/ellipsisText'

import * as S from './styles'
import { getBookRating } from '@/modules/explore/utils'

export type LastReadProps = {
  rating: RatingType
}

export function LastRead({ rating }: LastReadProps) {
  return (
    <S.Container>
      <Image src={rating.book.cover_url} width={108} height={152} alt="" />

      <S.Content>
        <S.Header>
          <Text as="span" size="sm">
            {dayjs(rating.created_at).fromNow()}
          </Text>
          <Rating rate={getBookRating(rating.book)} />
        </S.Header>
        <S.Details>
          <FlexCol>
            <Text as="h3">{rating.book.title}</Text>
            <Text size="sm" as="span">
              {rating.book.author}
            </Text>
          </FlexCol>
          <Text size="sm">{ellipsisText(rating.book.summary, 130)}</Text>
        </S.Details>
      </S.Content>
    </S.Container>
  )
}
