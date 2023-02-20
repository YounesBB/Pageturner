import booksMockData from './books.json';

//using our mock data set
let books = booksMockData

//helping methods for returning books, adding a book, and creating a new book

export const getBooks = () => {
   return books
}

export const newBook = (title, author, year, genre, description, page_nr) => {
    return {
        title: title,
        author: author,
        year: year,
        genre: genre,
        description: description,
        page_nr: page_nr
      }
}

export const addBook = (book) => {
    books = [...books, book]
    return books
}
