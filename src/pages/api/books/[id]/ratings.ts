import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { authOptions } from '../../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).send({
      message: 'Method not allowed',
    })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({
      message: 'Unauthorized',
    })
  }

  const createRatingSchema = z.object({
    rate: z.coerce.number(),
    description: z.string(),
  })

  const { rate, description } = createRatingSchema.parse(req.body)

  const bookId = req.query.id

  const rating = await prisma.rating.create({
    data: {
      rate,
      book_id: String(bookId),
      description,
      user_id: session.user.id,
    },
    include: {
      user: true,
    },
  })

  return res.status(201).json({
    rating,
  })
}
