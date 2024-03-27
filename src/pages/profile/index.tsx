import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ProfileModule } from '@/modules/profile'
import { NextPageWithLayout } from '../_app'
import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { HOME_ROUTE } from '@/constants/app-routes'

const ProfilePage: NextPageWithLayout = (props) => {
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

  return {
    props: {
      user: session.user,
    },
  }
}
