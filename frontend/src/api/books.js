import booksMockData from './books.json';

//using our mock data set
let books = booksMockData

//helping methods for returning books, adding a book, and creating a new book

export const getBooks = () => {
   return books
}

export const newBook = (title, author, year) => {
    return {
        title: title,
        author: author,
        year: year
      }
}

export const addBook = (book) => {
    books = [...books, book]
    return books
}
