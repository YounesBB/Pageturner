import React, { useCallback, useState } from "react"
import { BookList } from "../components/BookList"
import { Search } from "../components/Search"
import { getBooks } from "../api/books"


export const SearchPage = () => {

  const [books, setBooks] = useState(getBooks())
  const [filteredBooks, setFilteredBooks] = useState([])

  const handleSearchChange = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredBooks([])
    } else {
      setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())))
    }
  }

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      <BookList books={filteredBooks} />
    </div>
  )
}
