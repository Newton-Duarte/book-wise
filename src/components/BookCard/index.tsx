import { Box } from '../Box'
import { FlexCol } from '../FlexCol'
import { Rating } from '../Rating'
import { Text } from '../Text'

import * as S from './styles'
import Image from 'next/image'
import { Button } from '../Button'
import { useMemo, useState } from 'react'
import { Book } from '@/@types/Book'
import { User } from '@/@types/User'

export type BookCardProps = {
  user: User
  book: Book
}

export function BookCard({ user, book }: BookCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  const bookDescription = useMemo(() => {
    return showDescription
      ? book.description
      : book.description.substring(0, 220)
  }, [book.description, showDescription])

  return (
    <S.Container>
      <Box>
        <S.Header>
          <Image src={user.avatarURL} width={40} height={40} alt={user.name} />
          <FlexCol>
            <Text>{user.name}</Text>
            <Text as="span">Hoje</Text>
          </FlexCol>
          <Rating />
        </S.Header>

        <S.Content>
          <Image src={book.imageURL} width={108} height={152} alt="" />
          <S.Details>
            <FlexCol>
              <Text as="h3">{book.title}</Text>
              <Text size="sm" as="span">
                {book.author}
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
