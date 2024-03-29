import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
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
import { BackLink } from '@/components/BackLink'
import { HOME_ROUTE } from '@/constants/app-routes'

import * as S from './styles'

export function ProfileModule({ user, ratings, backLink }: ProfilePageProps) {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const readPages = useMemo(() => {
    return ratings.reduce(
      (total, rating) => (total += rating.book.total_pages),
      0,
    )
  }, [ratings])

  const readAuthors = useMemo(() => {
    const allAuthors = ratings.map((rating) => rating.book.author)
    const uniqueAuthors = [...new Set(allAuthors)]

    return uniqueAuthors?.length || 0
  }, [ratings])

  const mostReadCategory = useMemo(() => {
    const allCategories = ratings.map((rating) =>
      rating.book.categories
        .map((bookCategory) => bookCategory.category.name)
        .join(', '),
    )

    const categoriesCounts: Record<string, number> = {}
    allCategories.forEach((category) => {
      categoriesCounts[category] = (categoriesCounts[category] || 0) + 1
    })

    let mostRead = ''
    let currentReads = 0

    Object.entries(categoriesCounts).forEach((category) => {
      const categoryName = category[0]
      const categoryReadsCount = category[1]

      if (categoryReadsCount > currentReads) {
        currentReads = categoryReadsCount
        mostRead = categoryName
      }
    })

    return mostRead
  }, [ratings])

  const computedRatings = search
    ? ratings.filter((rating) =>
        rating.book.title.toLowerCase().includes(search.toLowerCase()),
      )
    : ratings

  return (
    <S.Container>
      {backLink ? (
        <BackLink onClick={() => router.push(HOME_ROUTE)}>Voltar</BackLink>
      ) : (
        <S.Header>
          <UserIcon size={32} />
          <Text as="h2" size="2xl">
            Perfil
          </Text>
        </S.Header>
      )}

      <S.Content>
        <S.BooksReviewsList>
          <S.SearchContainer>
            <TextField
              type="search"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              placeholder="Buscar livro avaliado"
              endIcon={<MagnifyingGlass size={20} />}
            />
          </S.SearchContainer>

          {computedRatings?.length ? (
            computedRatings.map((rating) => (
              <BookReview key={rating.id} rating={rating} />
            ))
          ) : search ? (
            <Text>Nenhum livro encontrado</Text>
          ) : (
            <Text>Nenhum livro avaliado encontrado</Text>
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
                <Text as="h6">{readPages}</Text>
                <Text as="span" size="sm">
                  Páginas lidas
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <Books size={32} />
              <FlexCol>
                <Text as="h6">{ratings?.length || 0}</Text>
                <Text as="span" size="sm">
                  Livros avaliados
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <UserList size={32} />
              <FlexCol>
                <Text as="h6">{readAuthors}</Text>
                <Text as="span" size="sm">
                  Autores lidos
                </Text>
              </FlexCol>
            </S.AnalyticsItem>
            <S.AnalyticsItem>
              <BookmarkSimple size={32} />
              <FlexCol>
                <Text as="h6">{mostReadCategory}</Text>
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
