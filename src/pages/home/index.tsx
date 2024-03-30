import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeModule } from '@/modules/home'
import { NextPageWithLayout } from '../_app'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'
import { Rating } from '@/@types/Rating'
import { Book } from '@/@types/Book'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

export type HomePageProps = {
  ratings: Rating[]
  popularBooks: Book[]
  lastUserRating: Rating | null
}

const HomePage: NextPageWithLayout<HomePageProps> = (props) => {
  return <HomeModule {...props} />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const ratings = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
  })

  const popularBooks: Book[] = await prisma.$queryRaw`
    SELECT b.id, b.title, b.author, b.cover_url
    FROM books b
    INNER JOIN ratings r on r.book_id = b.id
    GROUP BY b.id
    HAVING count(r.id) > 0
    LIMIT 5;
  `

  let lastUserRating = null

  const session = await getServerSession(req, res, authOptions)

  if (session) {
    lastUserRating = await prisma.rating.findFirst({
      where: {
        user_id: session.user.id,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        book: true,
      },
    })
  }

  lastUserRating = lastUserRating
    ? {
        ...lastUserRating,
        book: {
          ...lastUserRating.book,
          created_at: lastUserRating.book.created_at.toISOString(),
        },
        created_at: lastUserRating.created_at.toISOString(),
      }
    : null

  return {
    props: {
      lastUserRating,
      popularBooks,
      ratings: ratings.map((rating) => ({
        ...rating,
        book: {
          ...rating.book,
          created_at: rating.book.created_at.toISOString(),
        },
        user: {
          ...rating.user,
          created_at: rating.user.created_at.toISOString(),
        },
        created_at: rating.created_at.toISOString(),
      })),
    },
  }
}
