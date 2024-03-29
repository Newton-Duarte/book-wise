import { styled } from '@/styles'

export const Container = styled('div', {
  marginTop: '$10',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '$10',

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

export const BooksReviewsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const Analytics = styled('div', {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  borderLeft: '1px solid $gray700',
  padding: '0 3.625rem $5',

  img: {
    marginBottom: '$5',
  },

  h3: {
    color: '$gray100',
  },

  span: {
    color: '$gray400',
  },
})

export const SearchContainer = styled('div', {
  marginBottom: '$8',
})

export const Divider = styled('div', {
  width: '2rem',
  height: '0.25rem',
  background: '$gradient-horizontal',
  borderRadius: '$full',
  margin: '3rem 0',
})

export const AnalyticsItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const AnalyticsItem = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2rem 1fr',
  alignItems: 'center',
  gap: '$5',
  textAlign: 'left',

  svg: {
    color: '$green100',
  },

  h6: {
    color: '$gray200',
  },

  span: {
    color: '$gray300',
  },
})
