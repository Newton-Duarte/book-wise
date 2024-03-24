import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  borderRadius: '$md',
  padding: '3.5rem 4.5rem 3.5rem',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '$gray700',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  display: 'block',
  marginLeft: 'auto',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray400',
})

export const LoginButton = styled('button', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: '$gray600',
  height: '4.5rem',
  justifyContent: 'left',
  padding: '$5 $6',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '$sm',
  fontSize: '$lg',
  color: '$gray200',
  fontWeight: 'bold',

  img: {
    marginRight: '1.25rem',
  },

  '&:hover': {
    background: '$gray500 !important',
  },
})
