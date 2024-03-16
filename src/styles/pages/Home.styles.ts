import { styled } from '..'

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
})

export const BooksList = styled('ul', {
  marginTop: '1rem',
})
