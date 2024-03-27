import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const googleAuthScope =
  'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope: googleAuthScope,
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      console.log('callback signIn', account?.scope)
      if (!account?.scope?.includes(googleAuthScope)) {
        return '?error=permissions'
      }

      return true
    },
  },
}

export default NextAuth(authOptions)
