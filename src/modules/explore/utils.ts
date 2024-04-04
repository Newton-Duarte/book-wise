import { Book } from '@/@types/Book'

export function getBookRating(book: Book) {
  return (
    book?.ratings?.reduce((total, book) => (total += book.rate), 0) /
    book?.ratings?.length
  )
}
