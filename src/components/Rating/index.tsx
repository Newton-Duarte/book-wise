import React, { useMemo } from 'react'
import { Star } from 'phosphor-react'

import * as S from './styles'

type RatingProps = {
  rate: number
}

const rates = [1, 2, 3, 4, 5]

export function Rating({ rate }: RatingProps) {
  const renderRatings = useMemo(() => {
    return rates.map((currentRate) => (
      <Star
        key={currentRate}
        weight={currentRate <= rate ? 'fill' : 'regular'}
        size={16}
      />
    ))
  }, [rate])

  return <S.Container>{renderRatings}</S.Container>
}
