import { BookReview } from '@/@types/BookReview'

export const booksReviews: BookReview[] = [
  {
    id: '1',
    book: {
      id: '1',
      title: 'O Hobbit',
      description:
        'Publicado em 1937, O Hobbit foi o primeiro livro autoral de J.R.R. Tolkien a ser publicado. A história se passa no até então desconhecido mundo da Terra-média, onde conhecemos o Sr. Bilbo Bolseiro, um pacato e comilão hobbit que gosta de levar a vida em completa tranquilidade.',
      author: 'J.R.R Tolkien',
      imageURL: '/images/o-hobbit.png',
      rating: 4.5,
    },
    user: {
      id: '1',
      name: 'Newton Duarte',
      avatarURL: 'https://github.com/newton-duarte.png',
    },
    comment: 'O livro fala de ....',
    date: 'Hoje',
    rating: 4.5,
  },
  {
    id: '2',
    book: {
      id: '1',
      title: 'O guia do mochileiro das galáxias',
      description:
        'Considerado um dos maiores clássicos da literatura de ficção científica, O Guia do Mochileiro das Galáxias vem encantando gerações de leitores ao redor do mundo com seu humor afiado. Este é o primeiro título da famosa série escrita por Douglas Adams, que conta as aventuras espaciais do inglês Arthur Dent e de seu amigo Ford Prefect.',
      author: 'Douglas Adams',
      imageURL: '/images/o-guia-do-mochileiro-das-galaxias.png',
      rating: 4.5,
    },
    user: {
      id: '1',
      name: 'Newton Duarte',
      avatarURL: 'https://github.com/newton-duarte.png',
    },
    comment: 'O livro fala de ....',
    date: 'Hoje',
    rating: 4.5,
  },
  {
    id: '3',
    book: {
      id: '3',
      title: 'Entendendo Algoritmos',
      description:
        'Um guia ilustrado para programadores e outros curiosos. Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema. Os algoritmos que você mais utilizará como um programador já foram descobertos, testados e provados. Se você quer entendê-los, mas se recusa a estudar páginas e mais páginas de provas, este é o livro certo. Este guia cativante e completamente ilustrado torna simples aprender como utilizar os principais algoritmos nos seus programas.',
      author: 'Aditya Bhargava',
      imageURL: '/images/entendendo-algoritmos.png',
      rating: 4.5,
    },
    user: {
      id: '1',
      name: 'Newton Duarte',
      avatarURL: 'https://github.com/newton-duarte.png',
    },
    comment: 'O livro fala de ....',
    date: 'Hoje',
    rating: 4.5,
  },
]
