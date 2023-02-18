import React, { useState } from "react"
import { BookOpen24Regular, CalendarLtr24Regular, PersonEdit24Regular } from "@fluentui/react-icons"
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
} from "@fluentui/react-components"

import { AddBook } from "./AddBook"
import { getBooks } from "../api/books"

const bookIcon = <BookOpen24Regular/>
const authorIcon = <PersonEdit24Regular/>

const books = [
    {
        title: "Meeting ",
        author: "Max Mustermann",
        year: "7h ago",
    },
    {
        title: "Meeting ",
        author: "Max Mustermann",
        year: "7h ago",
    },
    {
        title: "Meeting ",
        author: "Max Mustermann",
        year: "7h ago",
    },
    {
        title: "Meeting ",
        author: "Max Mustermann",
        year: "7h ago",
    },
]

const columns = [
    { columnKey: "title", label: "Book title", icon: <BookOpen24Regular/> },
    { columnKey: "author", label: "Author", icon: <PersonEdit24Regular/> },
    { columnKey: "year", label: "Publication date", icon: <CalendarLtr24Regular/> },
]

const BookList = () => {
    const [books, setBooks] = useState(getBooks())
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleAddBook = (title, author, year) => {
        console.log(`--------> Clicked ${title} ${author} ${year}`)
        const newBook = {
            title: title,
            author: author,
            year: year
        }
        setBooks([...books, newBook])
    }

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

    // return <Urk/>
    return (
        <div>
            <Table arial-label="Default table">
                <TableHeader>
                    <TableRow style={{ borderBottom: '2px solid rgba(0, 128, 0, 0.3)' }}>
                        {columns.map((column) => (
                            <TableHeaderCell key={column.columnKey}>
                                <TableCellLayout media={column.icon}>
                                    {column.label}
                                </TableCellLayout>
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={`${index}-${book.title}`} style={{ borderBottom: '1px solid rgba(0, 128, 0, 0.2)' }}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
    /*
        <h1>Book List</h1>
        <input
            type="text"
            placeholder="Search books"
            value={searchTerm}
            onChange={handleSearchChange}
        />
        {updateBooks()}
        {<button onClick={() => setShowModal(true)}>Add Book</button>
        <Button onClick={() => setShowModal(true)} content="Add book" primary />}
        <AddBook onAddBook={handleAddBook}/>
    </div>

     */

export default BookList