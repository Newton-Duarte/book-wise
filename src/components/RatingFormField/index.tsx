import { Star } from 'phosphor-react'

import * as S from './styles'
import { useState } from 'react'

type RatingFormFieldProps = {
  onChange: (rate: number) => void
}

const rates = [1, 2, 3, 4, 5]

export function RatingFormField({ onChange }: RatingFormFieldProps) {
  const [rate, setRate] = useState(0)

  const handleChange = (newRate: number) => {
    setRate(newRate)
    onChange(newRate)
  }

  return (
    <S.Container>
      {rates.map((currentRate) => (
        <Star
          key={currentRate}
          weight={currentRate <= rate ? 'fill' : 'regular'}
          size={16}
          onMouseEnter={() => handleChange(currentRate)}
        />
      ))}
    </S.Container>
  )
}
