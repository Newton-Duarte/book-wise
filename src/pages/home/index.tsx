import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeModule } from '@/modules/home'
import { NextPageWithLayout } from '../_app'

const HomePage: NextPageWithLayout = () => {
  return <HomeModule />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
