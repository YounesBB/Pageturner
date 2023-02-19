import React, { useState } from "react"
import { BookList } from "../components/BookList"
import { getBooks } from "../api/books"
import { AddBook } from "../components/AddBook"


export const MyBooks = () => {

  const [books, setBooks] = useState(getBooks())

  const handleAddBook = (title, author, year) => {
    console.log(`--------> Clicked ${title} ${author} ${year}`)
    const newBook = {
      title: title,
      author: author,
      year: year
    }
    setBooks([...books, newBook])
  }

  return (
    <div>
      <AddBook onAddBook={handleAddBook}/>
      <BookList books={books} />
    </div>
  )
}