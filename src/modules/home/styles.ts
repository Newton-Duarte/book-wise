import { styled } from '@/styles'

export const Container = styled('div', {
  marginTop: '4.5rem',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  svg: {
    color: '$green100',
  },

  h2: {
    fontWeight: 'bold',
  },
})

export const Content = styled('div', {
  marginTop: '2.5rem',
  display: 'grid',
  gridTemplateColumns: '1fr 20.25rem',
  gap: '4rem',
})

export const BooksList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const ScrollBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  paddingRight: '0.75rem',

  maxHeight: 'calc(100dvh - 13.85rem)',
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    background: '$gray400',
    width: '0.25rem',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray500',
    width: '0.25rem',
  },
})

export const PopularBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const SectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '1rem',
})

export const PopularBook = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  background: '$gray700',
  borderRadius: '8px',
  padding: '$4 $5',
})

export const PopularBookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  p: {
    fontWeight: 'bold',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
