import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { FlexCol } from '../FlexCol'
import googleLogoImg from '@/assets/images/google-logo.png'
import githubLogoImg from '@/assets/images/github-logo.png'

export function LoginModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <Dialog.Description>
          <Text as="h2" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Faça login para deixar sua avaliação
          </Text>
          <FlexCol style={{ gap: '1rem' }}>
            <S.LoginButton>
              <Image src={googleLogoImg} width={32} height={32} alt="" />
              Entrar com Google
            </S.LoginButton>
            <S.LoginButton>
              <Image src={githubLogoImg} width={32} height={32} alt="" />
              Entrar com GitHub
            </S.LoginButton>
          </FlexCol>
        </Dialog.Description>
      </S.Content>
    </Dialog.Portal>
  )
}
