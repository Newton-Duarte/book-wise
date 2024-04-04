import { Star } from 'phosphor-react'

import * as S from './styles'

type RatingFormFieldProps = {
  rate: number
}

const rates = [1, 2, 3, 4, 5]

export function RatingFormField({ rate }: RatingFormFieldProps) {
  return (
    <S.Container>
      {rates.map((currentRate) => (
        <Star
          key={currentRate}
          weight={currentRate <= rate ? 'fill' : 'regular'}
          size={16}
        />
      ))}
    </S.Container>
  )
}
