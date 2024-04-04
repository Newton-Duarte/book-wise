import { useMemo } from 'react'
import { Star } from 'phosphor-react'

import * as S from './styles'

type RatingProps = {
  rate: number
  readonly?: boolean
}

export function Rating({ rate, readonly = false }: RatingProps) {
  const renderRatings = useMemo(() => {
    switch (rate) {
      case 0:
        return (
          <S.Container>
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </S.Container>
        )
      case 1:
        return (
          <S.Container>
            <Star weight="fill" size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </S.Container>
        )
      case 2:
        return (
          <S.Container>
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </S.Container>
        )
      case 3:
        return (
          <S.Container>
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star size={16} />
            <Star size={16} />
          </S.Container>
        )
      case 4:
        return (
          <S.Container>
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star size={16} />
          </S.Container>
        )
      case 5:
        return (
          <S.Container>
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
          </S.Container>
        )
      default:
        return (
          <S.Container>
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star weight="fill" size={16} />
            <Star size={16} />
          </S.Container>
        )
    }
  }, [rate])

  return renderRatings
}
