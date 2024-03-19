import { BookCard } from '@/components/BookCard'
import { User } from 'phosphor-react'
import { Text } from '@/components/Text'
import { booksReviews } from '@/data/booksReviews'

import * as S from '@/styles/pages/Profile.styles'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import { useRouter } from 'next/router'
import { EXPLORE_ROUTE, PROFILE_ROUTE } from '@/constants/app-routes'
import { ButtonLink } from '@/components/ButtonLink'

export function Profile() {
  const router = useRouter()

  return (
    <S.Container>
      <S.Header>
        <User size={32} />
        <Text as="h2" size="2xl">
          Perfil
        </Text>
      </S.Header>
    </S.Container>
  )
}
