import { Sidebar } from '@/components/Sidebar'
import { PropsWithChildren } from 'react'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
