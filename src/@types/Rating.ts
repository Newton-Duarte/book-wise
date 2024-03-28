import { Book } from './Book'
import { User } from './User'

export type Rating = {
  id: string
  rate: number
  description: string
  book: Book
  user: User
  created_at: Date
}
