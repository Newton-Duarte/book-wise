import { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ProfileModule } from '@/modules/profile'
import { NextPageWithLayout } from '../_app'
import { HOME_ROUTE } from '@/constants/app-routes'
import { User } from '@/@types/User'
import { prisma } from '@/lib/prisma'
import { Rating } from '@/@types/Rating'

export type ProfilePageProps = {
  user: User
  ratings: Rating[]
}

const ProfilePage: NextPageWithLayout<ProfilePageProps> = (props) => {
  return <ProfileModule {...props} />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ProfilePage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userId = String(params?.id)

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return {
      redirect: {
        destination: HOME_ROUTE,
        permanent: false,
      },
    }
  }

  const userRatings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        include: {
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
  })

  return {
    props: {
      backLink: true,
      user: {
        ...user,
        created_at: user.created_at.toISOString(),
      },
      ratings: userRatings?.map((rating) => ({
        ...rating,
        book: {
          ...rating.book,
          created_at: rating.book.created_at.toISOString(),
        },
        created_at: rating.created_at.toISOString(),
      })),
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
