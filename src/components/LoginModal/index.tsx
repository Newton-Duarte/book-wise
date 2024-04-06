import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { forwardRef } from 'react'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { FlexCol } from '../FlexCol'
import googleLogoImg from '@/assets/images/google-logo.png'
import githubLogoImg from '@/assets/images/github-logo.png'
import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'

export const LoginModal = forwardRef<HTMLDivElement>((props, ref) => {
  const handleGoogleSignIn = async () => {
    await signIn('google')
  }

  const handleGithubSignIn = async () => {
    await signIn('github')
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content ref={ref}>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <Text as="h2" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          Faça login para deixar sua avaliação
        </Text>
        <FlexCol style={{ gap: '1rem' }}>
          <S.LoginButton onClick={handleGoogleSignIn}>
            <Image src={googleLogoImg} width={32} height={32} alt="" />
            Entrar com Google
          </S.LoginButton>
          <S.LoginButton onClick={handleGithubSignIn}>
            <Image src={githubLogoImg} width={32} height={32} alt="" />
            Entrar com GitHub
          </S.LoginButton>
        </FlexCol>
      </S.Content>
    </Dialog.Portal>
  )
})

LoginModal.displayName = 'LoginModal'
