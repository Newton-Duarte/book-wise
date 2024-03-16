import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'

import { Text } from '../Text'

import * as S from './styles'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()

  console.log(router.pathname)

  return (
    <S.Container>
      <Image className="logo" src={logoImg} width={128} height={32} alt="" />
      <S.Menu>
        <Link
          href="/home"
          className={router.pathname === '/home' ? 'active' : ''}
        >
          <ChartLineUp size={24} />
          <Text>Início</Text>
        </Link>
        <Link
          href="/explore"
          className={router.pathname === '/explore' ? 'active' : ''}
        >
          <Binoculars size={24} />
          <Text>Explorar</Text>
        </Link>
        <Link href="/">
          <Text>Fazer login</Text>
          <SignIn size={20} />
        </Link>
      </S.Menu>
    </S.Container>
  )
}
