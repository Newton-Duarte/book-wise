import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'

import logoImg from '@/assets/images/logo.png'
import { Avatar } from '../Avatar'
import { getFirstWord } from '@/utils/getFirstWord'
import { Button } from '../Button'

import * as S from './styles'

export function Sidebar() {
  const router = useRouter()

  const session = useSession()

  const currentUser = session?.data?.user
  const isAuthenticated = !!currentUser

  return (
    <S.Container>
      <Image className="logo" src={logoImg} width={128} height={32} alt="" />
      <S.Menu>
        <Link
          href="/home"
          className={router.pathname === '/home' ? 'active' : ''}
        >
          <ChartLineUp size={24} />
          Início
        </Link>
        <Link
          href="/explore"
          className={router.pathname === '/explore' ? 'active' : ''}
        >
          <Binoculars size={24} />
          Explorar
        </Link>

        {isAuthenticated ? (
          <>
            <Link
              href="/profile"
              className={router.pathname === '/profile' ? 'active' : ''}
            >
              <User size={24} />
              Perfil
            </Link>
            <Button as="a" className="logout" onClick={() => signOut()}>
              <Avatar src={currentUser?.image} name={currentUser?.name} />
              {getFirstWord(currentUser?.name)}
              <SignIn size={20} />
            </Button>
          </>
        ) : (
          <Link href="/">
            Fazer login
            <SignIn size={20} />
          </Link>
        )}
      </S.Menu>
    </S.Container>
  )
}
