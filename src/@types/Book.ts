import { Category } from './Category'

type BookCategory = {
  category: Category
}

export type Book = {
  id: string
  author: string
  title: string
  description: string
  cover_url: string
  total_pages: number
  categories: BookCategory[]
  rating: number
}
