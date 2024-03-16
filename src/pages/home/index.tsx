import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/modules/home'
import { NextPageWithLayout } from '../_app'

const HomePage: NextPageWithLayout = () => {
  return <Home />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
