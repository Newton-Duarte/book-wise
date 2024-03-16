import { Star, StarHalf } from 'phosphor-react'

import * as S from './styles'

export function Rating() {
  return (
    <S.Container>
      <Star weight="fill" size={16} />
      <Star weight="fill" size={16} />
      <Star weight="fill" size={16} />
      <Star weight="fill" size={16} />
      <StarHalf weight="fill" size={16} />
    </S.Container>
  )
}
