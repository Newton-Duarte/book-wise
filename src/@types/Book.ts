import { Category } from './Category'
import { Rating } from './Rating'

type BookCategory = {
  book_id: string
  categoryId: string
  category: Category
}

export type Book = {
  id: string
  author: string
  title: string
  summary: string
  cover_url: string
  total_pages: number
  categories: BookCategory[]
  ratings: Rating[]
  rating: number
  created_at: Date
}
