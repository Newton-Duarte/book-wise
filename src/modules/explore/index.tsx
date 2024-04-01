import Image from 'next/image'
import { useSession } from 'next-auth/react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Binoculars, BookOpen, BookmarkSimple, Check, X } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'

import { Tag } from '@/components/Tag'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'
import { Book } from '@/@types/Book'
import { Box } from '@/components/Box'
import { FlexRow } from '@/components/FlexRow'
import { Button } from '@/components/Button'
import { TextArea } from '@/components/TextArea'
import { LoginModal } from '@/components/LoginModal'
import { ExplorePageProps } from '@/pages/explore'
import { Avatar } from '@/components/Avatar'
import { dayjs } from '@/lib/dayjs'
import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'

const userReviewFormSchema = z.object({
  rate: z.coerce.number().min(1, 'Campo obrigatório'),
  review: z.string().min(1, 'Campo obrigatório'),
})

type UserReviewFormData = z.infer<typeof userReviewFormSchema>

export function ExploreModule({ categories, books }: ExplorePageProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isReviewing, setIsReviewing] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserReviewFormData>({
    resolver: zodResolver(userReviewFormSchema),
    defaultValues: {
      rate: 1,
      review: '',
    },
  })

  const session = useSession()

  const currentUser = session?.data?.user
  const isAuthenticated = session.status === 'authenticated'
  const currentUserHasReviewedSelectedBook = selectedBook?.ratings?.some(
    (rating) => rating.user.id === currentUser?.id,
  )

  const formattedCategories = useMemo(() => {
    return [
      {
        id: 'all',
        name: 'Tudo',
      },
    ].concat(categories)
  }, [categories])

  const filteredBooks = useMemo(() => {
    return activeCategory === 'all'
      ? books.filter(
          (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase()),
        )
      : books.filter((book) => {
          return (
            book.categories.some(
              (category) => category.categoryId === activeCategory,
            ) &&
            (book.title.toLowerCase().includes(search.toLowerCase()) ||
              book.author.toLowerCase().includes(search.toLowerCase()))
          )
        })
  }, [activeCategory, books, search])

  const sidebarRef = useRef<null | HTMLElement>(null)
  const modalRef = useRef<null | HTMLDivElement>(null)

  const handleClickOutsideSidebar = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      !modalRef?.current?.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false)
      setSelectedBook(null)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideSidebar, true)

    return () => {
      document.removeEventListener('click', handleClickOutsideSidebar, true)
    }
  }, [])

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book)
    setIsSidebarOpen(true)
  }

  const handleSubmitReview = async (data: UserReviewFormData) => {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <Binoculars size={32} />
          <Text as="h2" size="2xl">
            Explorar
          </Text>
        </S.Title>
        <TextField
          type="search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Buscar livro ou autor"
        />
      </S.Header>

      <S.TagsList>
        {formattedCategories.map((category) => (
          <Tag
            key={category.id}
            label={category.name}
            className={category.id === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </S.TagsList>

      <S.Books>
        {filteredBooks?.length ? (
          filteredBooks.map((book) => (
            <S.Book key={book.id} onClick={() => handleSelectBook(book)}>
              <Image
                src={book.cover_url}
                width={108}
                height={152}
                alt={book.title}
              />
              <S.BookDetails>
                <FlexCol>
                  <Text>{book.title}</Text>
                  <Text as="span">{book.author}</Text>
                </FlexCol>

                <Rating />
              </S.BookDetails>
            </S.Book>
          ))
        ) : (
          <S.EmptyData>
            <Text size="sm">Nenhum livro encontrado</Text>
          </S.EmptyData>
        )}
      </S.Books>
      <S.Sidebar ref={sidebarRef} variant={isSidebarOpen ? 'open' : 'closed'}>
        <S.SidebarHeader>
          <S.CloseButton onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </S.CloseButton>
        </S.SidebarHeader>
        {selectedBook ? (
          <>
            <Box style={{ marginTop: '1rem' }}>
              <S.SidebarBookDetails>
                <Image
                  src={selectedBook?.cover_url}
                  width={172}
                  height={242}
                  alt={selectedBook?.title}
                />

                <S.SidebarBookInfo>
                  <FlexCol>
                    <Text as="h6" size="lg">
                      {selectedBook.title}
                    </Text>
                    <Text as="span" size="md">
                      {selectedBook.author}
                    </Text>
                  </FlexCol>
                  <FlexCol>
                    <Rating />
                    <Text as="span">
                      {`${selectedBook.ratings.length} ${
                        selectedBook.ratings.length > 1
                          ? 'avaliações'
                          : 'avaliação'
                      }`}
                    </Text>
                  </FlexCol>
                </S.SidebarBookInfo>
              </S.SidebarBookDetails>
              <S.SidebarBookFooter>
                <FlexRow>
                  <BookmarkSimple size={24} />
                  <FlexCol>
                    <Text size="sm">Categoria</Text>
                    <Text as="span" size="md">
                      {selectedBook?.categories
                        .map((bookCategory) => bookCategory.category.name)
                        .join(', ')}
                    </Text>
                  </FlexCol>
                </FlexRow>
                <FlexRow>
                  <BookOpen size={24} />
                  <FlexCol>
                    <Text size="sm">Páginas</Text>
                    <Text as="span" size="md">
                      {selectedBook.total_pages}
                    </Text>
                  </FlexCol>
                </FlexRow>
              </S.SidebarBookFooter>
            </Box>
            <S.SectionHeader style={{ margin: '2.5rem 0 1rem' }}>
              <Text size="sm">Avaliações</Text>
              {currentUserHasReviewedSelectedBook ? null : isAuthenticated ? (
                <Button variant="text" onClick={() => setIsReviewing(true)}>
                  Avaliar
                </Button>
              ) : (
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Button variant="text">Avaliar</Button>
                  </Dialog.Trigger>
                  <LoginModal ref={modalRef} />
                </Dialog.Root>
              )}
            </S.SectionHeader>

            <S.SidebarBookReviews>
              {isReviewing && (
                <S.SidebarBookReviewForm
                  as="form"
                  onSubmit={handleSubmit(handleSubmitReview)}
                >
                  <FlexRow>
                    <FlexRow>
                      <Image
                        src={currentUser?.image as string}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <Text size="md" as="h6">
                        {currentUser?.name}
                      </Text>
                    </FlexRow>
                    <S.RatingField>
                      <Rating />
                      {!!errors?.rate && (
                        <S.ErrorText size="xs">
                          {errors.rate.message}
                        </S.ErrorText>
                      )}
                    </S.RatingField>
                  </FlexRow>
                  <TextArea
                    placeholder="Escreva sua avaliação"
                    {...register('review')}
                  />
                  {!!errors?.review && (
                    <S.ErrorText size="xs">{errors.review.message}</S.ErrorText>
                  )}
                  <S.SidebarBookReviewFormActions>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setIsReviewing(false)}
                    >
                      <X size={24} />
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      <Check size={24} />
                    </button>
                  </S.SidebarBookReviewFormActions>
                </S.SidebarBookReviewForm>
              )}
              {selectedBook.ratings.length ? (
                selectedBook.ratings.map((review) => (
                  <S.SidebarBookReview
                    key={review.id}
                    className={
                      review.user.id === currentUser?.id
                        ? 'current-user-review'
                        : ''
                    }
                  >
                    <FlexRow>
                      <FlexRow>
                        <Avatar
                          src={review.user.image}
                          name={review.user.name}
                          size="lg"
                        />
                        <FlexCol>
                          <Text size="md" as="h6">
                            {review.user.name}
                          </Text>
                          <Text as="span" size="sm">
                            {dayjs(review.created_at).fromNow()}
                          </Text>
                        </FlexCol>
                      </FlexRow>
                      <Rating />
                    </FlexRow>
                    <Text size="sm">{review.description}</Text>
                  </S.SidebarBookReview>
                ))
              ) : (
                <S.EmptyData>
                  <Text size="sm">Nenhuma avaliação encontrada</Text>
                </S.EmptyData>
              )}
            </S.SidebarBookReviews>
          </>
        ) : (
          <S.EmptyData>
            <Text size="sm">Nenhum livro encontrado</Text>
          </S.EmptyData>
        )}
      </S.Sidebar>
    </S.Container>
  )
}
