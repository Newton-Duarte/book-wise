// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    email: string
    name: string
    emailVerified: Date | null
    image: string
    created_at: Date
  }

  interface Session {
    user: User
  }
}
