import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { RocketLaunch } from 'phosphor-react'
import { HOME_ROUTE } from '@/constants/app-routes'
import logoImg from '@/assets/images/logo.png'
import authBgImg from '@/assets/images/auth-bg.png'
import googleLogoImg from '@/assets/images/google-logo.png'
import githubLogoImg from '@/assets/images/github-logo.png'

import * as S from './styles'

export function LoginModule() {
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    await signIn('google')
  }

  const handleGithubSignIn = async () => {
    await signIn('github')
  }

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={authBgImg} width={598} height={912} alt="" />
        <Image className="logo" src={logoImg} width={232} height={58} alt="" />
      </S.ImageContainer>
      <S.ContentContainer>
        <Image className="logo" src={logoImg} width={232} height={58} alt="" />
        <Text as="h2">Boas vindas!</Text>
        <Text>Faça seu login ou acesse como visitante.</Text>

        <ul>
          <li>
            <Button onClick={handleGoogleSignIn}>
              <Image src={googleLogoImg} width={32} height={32} alt="" />
              Entrar com Google
            </Button>
          </li>
          <li>
            <Button onClick={handleGithubSignIn}>
              <Image src={githubLogoImg} width={32} height={32} alt="" />
              Entrar com GitHub
            </Button>
          </li>
          <li>
            <Button onClick={() => router.push(HOME_ROUTE)}>
              <RocketLaunch color="#8381D9" />
              Acessar como visitante
            </Button>
          </li>
        </ul>
      </S.ContentContainer>
    </S.Container>
  )
}
