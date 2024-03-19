import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Profile } from '@/modules/profile'
import { NextPageWithLayout } from '../_app'

const ProfilePage: NextPageWithLayout = () => {
  return <Profile />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ProfilePage
