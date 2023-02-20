import React, { useState } from "react"
import { BookList } from "../components/BookList"
import { getBooks } from "../api/books"
import { AddBook } from "../components/AddBook"


export const MyBooks = () => {

  const [books, setBooks] = useState(getBooks())

  const handleAddBook = (title, author, year) => {
    const newBook = {
      title: title,
      author: author,
      year: year
    }
    setBooks([...books, newBook])
  }

  return (
    <div>
      <h1> My library:</h1> 
      <AddBook onAddBook={handleAddBook}/>
      <BookList books={books} />
    </div>
  )
}