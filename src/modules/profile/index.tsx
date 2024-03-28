import { useMemo } from 'react'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  User as UserIcon,
  UserList,
} from 'phosphor-react'
import dayjs from 'dayjs'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'

import { BookReview } from './BookReview'
import { FlexCol } from '@/components/FlexCol'
import { Avatar } from '@/components/Avatar'
import { ProfilePageProps } from '@/pages/profile'

import * as S from './styles'

type UserAnalytics = {
  readPages: number
  reviewedBooks: number
  readAuthors: number
  mostReadCategory: string
}

export function ProfileModule({ user, ratings }: ProfilePageProps) {
  console.log(ratings)

  const analytics = useMemo(() => {
    return ratings?.reduce<UserAnalytics>(
      (summary, rating) => {
        summary.readPages += rating.book.total_pages
        summary.reviewedBooks += 1
        summary.readAuthors += 1
        summary.mostReadCategory = 'Fantasia'

        return summary
      },
      {
        readPages: 0,
        reviewedBooks: 0,
        readAuthors: 0,
        mostReadCategory: '',
      },
    )
  }, [ratings])

  console.log(analytics)

  return (
    <S.Container>
      <S.Header>
        <UserIcon size={32} />
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

          {ratings?.length ? (
            ratings.map((rating) => (
              <BookReview key={rating.id} rating={rating} />
            ))
          ) : (
            <Text>Você ainda não tem livros avaliados</Text>
          )}
        </S.BooksReviewsList>

        <S.Analytics>
          <Avatar src={user?.image || ''} name={user?.name || ''} size="xl" />
          <FlexCol>
            <Text as="h3" size="lg">
              {user?.name || ''}
            </Text>
            <Text as="span" size="sm">
              membro desde {dayjs(user?.created_at).format('YYYY')}
            </Text>
          </FlexCol>

          <S.Divider />

          <S.AnalyticsItems>
            <S.AnalyticsItem>
              <BookOpen size={32} />
              <FlexCol>
                <Text as="h6">{analytics.readPages}</Text>
                <Text as="span" size="sm">
                  Páginas lidas
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <Books size={32} />
              <FlexCol>
                <Text as="h6">{analytics.reviewedBooks}</Text>
                <Text as="span" size="sm">
                  Livros avaliados
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <UserList size={32} />
              <FlexCol>
                <Text as="h6">{analytics.readAuthors}</Text>
                <Text as="span" size="sm">
                  Autores lidos
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <BookmarkSimple size={32} />
              <FlexCol>
                <Text as="h6">{analytics.mostReadCategory}</Text>
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
