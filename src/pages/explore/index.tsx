import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ExploreModule } from '@/modules/explore'
import { NextPageWithLayout } from '../_app'
import { GetServerSideProps } from 'next'
import { Book } from '@/@types/Book'
import { Category } from '@/@types/Category'
import { prisma } from '@/lib/prisma'

export type ExplorePageProps = {
  categories: Category[]
  books: Book[]
}

const ExplorePage: NextPageWithLayout<ExplorePageProps> = (props) => {
  return <ExploreModule {...props} />
}

ExplorePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ExplorePage

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  const books = await prisma.book.findMany({
    select: {
      id: true,
      title: true,
      author: true,
      cover_url: true,
      total_pages: true,
      ratings: {
        select: {
          id: true,
          description: true,
          rate: true,
          created_at: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
      categories: {
        select: {
          categoryId: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  })

  const booksCategories = books.map((book) => book.categories)
  const filteredCategories = categories.filter((category) =>
    booksCategories.some((bookCategory) =>
      bookCategory.some((bCategory) => bCategory.categoryId === category.id),
    ),
  )

  return {
    props: {
      categories: filteredCategories,
      books: books.map((book) => ({
        ...book,
        ratings: book.ratings.map((rating) => ({
          ...rating,
          created_at: rating.created_at.toISOString(),
        })),
      })),
    },
  }
}
