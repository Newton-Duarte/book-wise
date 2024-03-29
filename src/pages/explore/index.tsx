import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ExploreModule } from '@/modules/explore'
import { NextPageWithLayout } from '../_app'

const ExplorePage: NextPageWithLayout = () => {
  return <ExploreModule />
}

ExplorePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ExplorePage
