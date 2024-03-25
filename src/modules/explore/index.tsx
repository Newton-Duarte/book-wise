import { Binoculars, BookOpen, BookmarkSimple, Check, X } from 'phosphor-react'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'

import * as S from './styles'
import { Tag } from '@/components/Tag'
import React, { useEffect, useRef, useState } from 'react'
import { books } from '@/data/books'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'
import { Book } from '@/@types/Book'
import { Box } from '@/components/Box'
import { FlexRow } from '@/components/FlexRow'
import { Button } from '@/components/Button'
import { TextArea } from '@/components/TextArea'
import { LoginModal } from '@/components/LoginModal'
import * as Dialog from '@radix-ui/react-dialog'

const tags = [
  {
    id: 1,
    title: 'Tudo',
  },
  {
    id: 2,
    title: 'Computação',
  },
  {
    id: 3,
    title: 'Educação',
  },
  {
    id: 4,
    title: 'Fantasia',
  },
  {
    id: 5,
    title: 'Ficção científica',
  },
  {
    id: 6,
    title: 'Horror',
  },
  {
    id: 7,
    title: 'HQs',
  },
  {
    id: 8,
    title: 'Suspense',
  },
]

export function Explore() {
  const [activeTag, setActiveTag] = useState(1)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isReviewing, setIsReviewing] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

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

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <Binoculars size={32} />
          <Text as="h2" size="2xl">
            Explorar
          </Text>
        </S.Title>
        <TextField placeholder="Buscar livro ou autor" />
      </S.Header>

      <S.TagsList>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.title}
            className={tag.id === activeTag ? 'active' : ''}
            onClick={() => setActiveTag(tag.id)}
          />
        ))}
      </S.TagsList>

      <S.Books>
        {books.map((book) => (
          <S.Book key={book.id} onClick={() => handleSelectBook(book)}>
            <Image
              src={book.imageURL}
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
        ))}
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
                  src={selectedBook?.imageURL}
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
                    <Text as="span">3 avaliações</Text>
                  </FlexCol>
                </S.SidebarBookInfo>
              </S.SidebarBookDetails>
              <S.SidebarBookFooter>
                <FlexRow>
                  <BookmarkSimple size={24} />
                  <FlexCol>
                    <Text size="sm">Categoria</Text>
                    <Text as="span" size="md">
                      Computação, educação
                    </Text>
                  </FlexCol>
                </FlexRow>
                <FlexRow>
                  <BookOpen size={24} />
                  <FlexCol>
                    <Text size="sm">Páginas</Text>
                    <Text as="span" size="md">
                      160
                    </Text>
                  </FlexCol>
                </FlexRow>
              </S.SidebarBookFooter>
            </Box>
            <S.SectionHeader style={{ margin: '2.5rem 0 1rem' }}>
              <Text size="sm">Avaliações</Text>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button variant="text">Avaliar</Button>
                </Dialog.Trigger>
                <LoginModal ref={modalRef} />
              </Dialog.Root>
            </S.SectionHeader>

            <S.SidebarBookReviews>
              {isReviewing && (
                <S.SidebarBookReviewForm as="form">
                  <FlexRow>
                    <FlexRow>
                      <Image
                        src="https://github.com/newton-duarte.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                      <Text size="md" as="h6">
                        Newton Duarte
                      </Text>
                    </FlexRow>
                    <Rating />
                  </FlexRow>
                  <TextArea placeholder="Escreva sua avaliação" />
                  <S.SidebarBookReviewFormActions>
                    <button type="button" onClick={() => setIsReviewing(false)}>
                      <X size={24} />
                    </button>
                    <button type="submit">
                      <Check size={24} />
                    </button>
                  </S.SidebarBookReviewFormActions>
                </S.SidebarBookReviewForm>
              )}
              {[1, 2, 3].map((review) => (
                <S.SidebarBookReview
                  key={review}
                  className={review === 1 ? 'current-user-review' : ''}
                >
                  <FlexRow>
                    <FlexRow>
                      <Image
                        src="https://github.com/newton-duarte.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                      <FlexCol>
                        <Text size="md" as="h6">
                          Newton Duarte
                        </Text>
                        <Text as="span" size="sm">
                          Há 2 dias
                        </Text>
                      </FlexCol>
                    </FlexRow>
                    <Rating />
                  </FlexRow>
                  <Text size="sm">
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectus leo. Sit porta eget nec vitae sit vulputate eget
                  </Text>
                </S.SidebarBookReview>
              ))}
            </S.SidebarBookReviews>
          </>
        ) : (
          <p>Nenhum livro encontrado</p>
        )}
      </S.Sidebar>
    </S.Container>
  )
}
