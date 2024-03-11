import { styled } from '@/styles'

const Typography = styled('p', {
  color: '$green100',
})

export default function Home() {
  return (
    <>
      <Typography>Hello BookWise</Typography>
    </>
  )
}
