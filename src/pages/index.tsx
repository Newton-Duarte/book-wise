import Image from 'next/image'
import { RocketLaunch } from 'phosphor-react'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import logoImg from '@/assets/images/logo.png'
import authBgImg from '@/assets/images/auth-bg.png'
import googleLogoImg from '@/assets/images/google-logo.png'
import githubLogoImg from '@/assets/images/github-logo.png'

import * as S from '@/styles/Home.styles'

export default function Home() {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={authBgImg} width={598} height={912} alt="" />
        <Image className="logo" src={logoImg} width={232} height={58} alt="" />
      </S.ImageContainer>
      <S.ContentContainer>
        <Text as="h2">Boas vindas!</Text>
        <Text>Faça seu login ou acesse como visitante.</Text>

        <ul>
          <li>
            <Button>
              <Image src={googleLogoImg} width={32} height={32} alt="" />
              Entrar com Google
            </Button>
          </li>
          <li>
            <Button>
              <Image src={githubLogoImg} width={32} height={32} alt="" />
              Entrar com GitHub
            </Button>
          </li>
          <li>
            <Button>
              <RocketLaunch color="#8381D9" />
              Acessar como visitante
            </Button>
          </li>
        </ul>
      </S.ContentContainer>
    </S.Container>
  )
}
