import { ReactElement } from 'react'
import { LoginModule } from '@/modules/auth/login'
import { NextPageWithLayout } from './_app'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { HOME_ROUTE } from '@/constants/app-routes'

const LoginPage: NextPageWithLayout = () => {
  return <LoginModule />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (session?.user) {
    return {
      redirect: {
        destination: HOME_ROUTE,
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
