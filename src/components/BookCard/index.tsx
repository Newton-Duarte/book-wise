import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '../Box'
import { FlexCol } from '../FlexCol'
import { Rating } from '../Rating'
import { Text } from '../Text'

import { Button } from '../Button'
import { Rating as RatingType } from '@/@types/Rating'
import { dayjs } from '@/lib/dayjs'
import { Avatar } from '../Avatar'
import { getBookRating } from '@/modules/explore/utils'

import * as S from './styles'

export type BookCardProps = {
  rating: RatingType
}

export function BookCard({ rating }: BookCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  const bookDescription = useMemo(() => {
    return showDescription
      ? rating.description
      : rating.description.substring(0, 220)
  }, [rating.description, showDescription])

  return (
    <S.Container>
      <Box>
        <S.Header>
          <Link href={`/profile/${rating.user.id}`}>
            <Avatar src={rating.user.image} size="lg" name={rating.user.name} />
          </Link>
          <FlexCol>
            <Link href={`/profile/${rating.user.id}`}>
              <Text>{rating.user.name}</Text>
            </Link>
            <Text as="span">{dayjs(rating.created_at).fromNow()}</Text>
          </FlexCol>
          <Rating rate={getBookRating(rating.book)} />
        </S.Header>

        <S.Content>
          <Image src={rating.book.cover_url} width={108} height={152} alt="" />
          <S.Details>
            <FlexCol>
              <Text as="h3">{rating.book.title}</Text>
              <Text size="sm" as="span">
                {rating.book.author}
              </Text>
            </FlexCol>
            <Text size="sm">
              {bookDescription}{' '}
              <Button
                variant="text"
                size="text"
                color="purple"
                onClick={() => setShowDescription((prev) => !prev)}
              >
                ver {showDescription ? 'menos' : 'mais'}
              </Button>
            </Text>
          </S.Details>
        </S.Content>
      </Box>
    </S.Container>
  )
}
