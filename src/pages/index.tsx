import { ReactElement } from 'react'
import { Login } from '@/modules/auth/login'
import { NextPageWithLayout } from './_app'

const LoginPage: NextPageWithLayout = () => {
  return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default LoginPage
