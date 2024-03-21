import { Binoculars, X } from 'phosphor-react'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'

import * as S from './styles'
import { Tag } from '@/components/Tag'
import { useState } from 'react'
import { books } from '@/data/books'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import { FlexCol } from '@/components/FlexCol'

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
          <S.Book key={book.id} onClick={() => setIsSidebarOpen(true)}>
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
      <S.Sidebar variant={isSidebarOpen ? 'open' : 'closed'}>
        <S.SidebarHeader>
          <S.CloseButton onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </S.CloseButton>
        </S.SidebarHeader>
      </S.Sidebar>
    </S.Container>
  )
}
