import Image from 'next/image'
import { useMemo } from 'react'
import { Book } from '@/@types/Book'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'
import * as S from './styles'

export type LastReadProps = {
  book: Book
}

export function LastRead({ book }: LastReadProps) {
  const bookDescription = useMemo(() => {
    return `${book.description.substring(0, 110)}...`
  }, [book.description])

  return (
    <S.Container>
      <Image src={book.imageURL} width={108} height={152} alt="" />

      <S.Content>
        <S.Header>
          <Text as="span">Hoje</Text>
          <Rating />
        </S.Header>
        <S.Details>
          <FlexCol>
            <Text as="h3">{book.title}</Text>
            <Text size="sm" as="span">
              {book.author}
            </Text>
          </FlexCol>
          <Text size="sm">{bookDescription}</Text>
        </S.Details>
      </S.Content>
    </S.Container>
  )
}
