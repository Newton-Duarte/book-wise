import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'

import { Text } from '../Text'

import * as S from './styles'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()

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
        <Link
          href="/profile"
          className={router.pathname === '/profile' ? 'active' : ''}
        >
          <User size={24} />
          Perfil
        </Link>

        <Link href="/">
          Fazer login
          <SignIn size={20} />
        </Link>
      </S.Menu>
    </S.Container>
  )
}
