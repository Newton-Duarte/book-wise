import { Book } from './Book'
import { User } from './User'

export type BookReview = {
  id: string
  user: User
  book: Book
  date: string
  comment: string
  rating: number
}
