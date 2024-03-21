import { Box } from '@/components/Box'
import { FlexCol } from '@/components/FlexCol'
import { FlexRow } from '@/components/FlexRow'
import { TextField } from '@/components/TextField'
import { styled } from '@/styles'

export const Container = styled('div', {
  marginTop: '4.5rem',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: '0.75rem',

  svg: {
    color: '$green100',
  },

  h2: {
    fontWeight: 'bold',
  },

  div: {
    '&:last-of-type': {
      flexBasis: '27.5rem',
    },
  },
})

export const Title = styled(FlexRow, {
  alignItems: 'center',
  gap: '0.75rem',
})

export const TagsList = styled('div', {
  marginTop: '$10',

  button: {
    '& + button': {
      marginLeft: '0.75rem',
    },
  },
})

export const Books = styled('div', {
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.25rem',
})

export const Book = styled(Box, {
  padding: '1rem 1.25rem',
  display: 'grid',
  gridTemplateColumns: '6.75rem 1fr',
  gap: '1.25rem',
})

export const BookDetails = styled(FlexCol, {
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
