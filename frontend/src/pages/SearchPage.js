import React, { useCallback, useState, useEffect } from "react"
import { BookList } from "../components/BookList"
import { Search } from "../components/Search"
import { getBooks } from "../api/books"

export const SearchPage = () => {

  const [books, setBooks] = useState([]); // initially set state to an empty array
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearchChange = useCallback((searchTerm) => {
    if (searchTerm === "") {
      setFilteredBooks([]);
    } else {
      setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())))
    }
  }, [books]);

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []); // empty dependency array to ensure it only runs once on mount

  return (
    <div>
      <Search onSearchChange={handleSearchChange}/>
      <BookList books={filteredBooks}/>
    </div>
  );
}