import React, { useState, useEffect } from "react";
import { BookList } from "../components/BookList";
import { getBooks } from "../api/books";
import { AddBook } from "../components/AddBook";

export const MyBooks = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (title, author, releaseYear, genre, description, pages, coverImage) => {
    const newBook = {
      title: title,
      author: author,
      releaseYear: releaseYear,
      genre: genre,
      description: description,
      pages: pages,
      coverImage: coverImage
    };
    try {
      setBooks([...books, newBook]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <div className="library-controls">
        <h1>My library:</h1>
        <AddBook onAddBook={handleAddBook} />
      </div>
    <div>
      <BookList books={books} />
    </div>
    </>
  );
};
