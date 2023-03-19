import { useState, useEffect } from "react";
import { BookList } from "../components/BookList";
import { getBooks } from "../api/books";
import { AddBook } from "../components/AddBook";
import { getBooksByUser } from "../api/booksAPI";

export const MyRatings = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooksByUser();
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
        <h1>My Ratings</h1>
      </div>
    <div>
      <BookList books={books} />
    </div>
    </>
  );
};
