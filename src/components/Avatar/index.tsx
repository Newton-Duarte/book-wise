import * as S from './styles'

type AvatarProps = {
  src: string
  name: string
}

export function Avatar({ src, name }: AvatarProps) {
  return <S.Image src={src} alt={name} />
}
