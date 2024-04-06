import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

const googleAuthScope =
  'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
const githubAuthScope = 'read:user,user:email'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
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
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope: githubAuthScope,
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      const provider = account?.provider
      if (
        !account?.scope?.includes(
          provider === 'google' ? googleAuthScope : githubAuthScope,
        )
      ) {
        return '?error=permissions'
      }

      return true
    },
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...user,
          created_at: user.created_at.toISOString(),
        },
      }
    },
  },
}

export default NextAuth(authOptions)
