import React, { useState } from "react"
import { BookList } from "../components/BookList"
import { getBooks } from "../api/books"
import { AddBook } from "../components/AddBook"


export const MyBooks = () => {

  const [books, setBooks] = useState(getBooks())

  const handleAddBook = (title, author, year, genre, description, page_nr) => {
    const newBook = {
      title: title,
      author: author,
      year: year,
      genre: genre,
      description: description,
      page_nr: page_nr
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