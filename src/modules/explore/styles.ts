import { Box } from '@/components/Box'
import { FlexCol } from '@/components/FlexCol'
import { FlexRow } from '@/components/FlexRow'
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
  cursor: 'pointer',
  border: '2px solid transparent',

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const BookDetails = styled(FlexCol, {
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const Sidebar = styled('aside', {
  width: '41.25rem',
  height: '100dvh',
  position: 'absolute',
  top: 0,
  right: 0,
  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px #00000080',
  padding: '$6 3rem',

  variants: {
    variant: {
      open: {
        display: 'block',
      },
      closed: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'closed',
  },
})

export const Overlay = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  background: 'rgba(0, 0, 0, 0.6)',
})

export const SidebarHeader = styled(FlexRow, {
  justifyContent: 'flex-end',
})

export const CloseButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
})

export const SidebarBookDetails = styled('div', {
  display: 'grid',
  gridTemplateColumns: '10.75rem 1fr',
  gap: '$8',
})

export const SidebarBookInfo = styled(FlexCol, {
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
  },

  [`& ${FlexCol}`]: {
    gap: '0.25rem',
  },
})

export const SidebarBookFooter = styled('div', {
  marginTop: '$10',
  borderTop: '1px solid $gray600',
  paddingTop: '$5',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  [`& ${FlexRow}`]: {
    alignItems: 'center',
    gap: '1rem',
  },

  svg: {
    color: '$green100',
  },
})

export const SidebarBookReviews = styled(FlexCol, {
  marginTop: '$10',
  gap: '0.75rem',
})

export const SidebarBookReview = styled(Box, {
  [`& > ${FlexRow}`]: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '$5',

    img: {
      marginRight: '1rem',
      border: '2px solid #7FD1CC',
      borderRadius: '$full',
      objectFit: 'cover',
    },

    span: {
      color: '$gray400',
    },
  },
})

export const SectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
