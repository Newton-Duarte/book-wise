import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from 'phosphor-react'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'

import * as S from './styles'
import { BookReview } from './BookReview'
import { booksReviews } from '@/data/booksReviews'
import Image from 'next/image'
import { FlexCol } from '@/components/FlexCol'

export function Profile() {
  return (
    <S.Container>
      <S.Header>
        <User size={32} />
        <Text as="h2" size="2xl">
          Perfil
        </Text>
      </S.Header>

      <S.Content>
        <S.BooksReviewsList>
          <S.SearchContainer>
            <TextField
              placeholder="Buscar livro avaliado"
              endIcon={<MagnifyingGlass size={20} />}
            />
          </S.SearchContainer>

          <BookReview book={booksReviews[2].book} />
          <BookReview book={booksReviews[1].book} />
        </S.BooksReviewsList>

        <S.Analytics>
          <Image
            src="https://github.com/newton-duarte.png"
            width={72}
            height={72}
            alt=""
          />
          <FlexCol>
            <Text as="h3" size="lg">
              Newton Duarte
            </Text>
            <Text as="span" size="sm">
              membro desde 2024
            </Text>
          </FlexCol>

          <S.Divider />

          <S.AnalyticsItems>
            <S.AnalyticsItem>
              <BookOpen size={32} />
              <FlexCol>
                <Text as="h6">3853</Text>
                <Text as="span" size="sm">
                  Páginas lidas
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <Books size={32} />
              <FlexCol>
                <Text as="h6">10</Text>
                <Text as="span" size="sm">
                  Livros avaliados
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <UserList size={32} />
              <FlexCol>
                <Text as="h6">8</Text>
                <Text as="span" size="sm">
                  Autores lidos
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <BookmarkSimple size={32} />
              <FlexCol>
                <Text as="h6">Computação</Text>
                <Text as="span" size="sm">
                  Categoria mais lida
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
          </S.AnalyticsItems>
        </S.Analytics>
      </S.Content>
    </S.Container>
  )
}
