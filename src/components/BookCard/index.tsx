import { Box } from '../Box'
import { FlexCol } from '../FlexCol'
import { Rating } from '../Rating'
import { Text } from '../Text'
import bookImg from '@/assets/images/o-hobbit.png'

import * as S from './styles'
import Image from 'next/image'

export function BookCard() {
  return (
    <S.Container>
      <Box>
        <S.Header>
          <Image
            src="https://github.com/newton-duarte.png"
            width={40}
            height={40}
            alt=""
          />
          <FlexCol>
            <Text>Newton Duarte</Text>
            <Text as="span">Hoje</Text>
          </FlexCol>
          <Rating />
        </S.Header>

        <S.Content>
          <Image src={bookImg} width={108} height={152} alt="" />
          <S.Details>
            <FlexCol>
              <Text as="h3">O Hobbit</Text>
              <Text size="sm" as="span">
                J.R.R. Tolkien
              </Text>
            </FlexCol>
            <Text size="sm">
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit
              ipsum. Sed vulputate massa velit nibh... ver mais
            </Text>
          </S.Details>
        </S.Content>
      </Box>
    </S.Container>
  )
}
