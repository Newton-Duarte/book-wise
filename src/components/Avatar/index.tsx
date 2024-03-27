import * as S from './styles'
import { AvatarSize, getSizeInNumber } from './utils'

type AvatarProps = {
  src: string
  name: string
  size?: AvatarSize
}

export function Avatar({ src, name, size = 'md' }: AvatarProps) {
  return (
    <S.Image
      src={src}
      alt={name}
      size={size}
      width={getSizeInNumber(size)}
      height={getSizeInNumber(size)}
    />
  )
}
