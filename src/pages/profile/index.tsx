import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ProfileModule } from '@/modules/profile'
import { NextPageWithLayout } from '../_app'
import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { HOME_ROUTE } from '@/constants/app-routes'
import { User } from '@/@types/User'
import { prisma } from '@/lib/prisma'
import { Rating } from '@/@types/Rating'

export type ProfilePageProps = {
  user: User
  ratings: Rating[]
  backLink?: boolean
}

const ProfilePage: NextPageWithLayout<ProfilePageProps> = (props) => {
  return <ProfileModule {...props} />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ProfilePage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session?.user) {
    return {
      redirect: {
        destination: HOME_ROUTE,
        permanent: false,
      },
    }
  }

  const userRatings = await prisma.rating.findMany({
    where: {
      user_id: session.user.id,
    },
    include: {
      book: {
        include: {
          ratings: true,
          categories: {
            include: {
              category: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return {
    props: {
      user: session.user,
      ratings: userRatings?.map((rating) => ({
        ...rating,
        book: {
          ...rating.book,
          ratings: rating.book.ratings.map((rating) => ({
            ...rating,
            created_at: rating.created_at.toISOString(),
          })),
          created_at: rating.book.created_at.toISOString(),
        },
        created_at: rating.created_at.toISOString(),
      })),
    },
  }
}
