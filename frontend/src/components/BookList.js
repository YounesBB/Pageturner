import React, { useState } from "react"
import { AddBook } from "./AddBook"
import { getBooks } from "../api/books"

const BookList = () => {
    const [books, setBooks] = useState(getBooks());
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddBook = (title, author, year) => {
        console.log(`--------> Clicked ${title} ${author} ${year}`)
        const newBook = {
            title: title,
            author: author,
            year: year
        };
        setBooks([...books, newBook]);
    };

    const updateBooks = () => {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return (
            <ul>
                {filteredBooks.map(book => (
                    <li key={book.title}>{`${book.title} by ${book.author} (${book.year})`}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <h1>Book List</h1>
            <input
                type="text"
                placeholder="Search books"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {updateBooks()}
            {/* <button onClick={() => setShowModal(true)}>Add Book</button>
            <Button onClick={() => setShowModal(true)} content="Add book" primary /> */}
            <AddBook onAddBook={handleAddBook}/>
        </div>
    );
}

export default BookList;