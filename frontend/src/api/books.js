import booksMockData from './books.json';

let books = booksMockData

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
