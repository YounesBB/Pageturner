import { useState, useEffect } from "react"
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
} from "@fluentui/react-components"

import axios from 'axios'

const columns = [
    { columnKey: "title", label: ""},
    { columnKey: "author", label: ""}
]

const TopList = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const cachedBooks = JSON.parse(localStorage.getItem("nyt-books"))
        if (cachedBooks) {
            setBooks(cachedBooks)
        } else {
            axios.get("https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=XrCIx087EJ5sGfUCIoaM1v5dtGtGxG7H")
                .then(response => {
                    const booksData = response.data.results.books
                    localStorage.setItem("nyt-books", JSON.stringify(booksData))
                    setBooks(booksData)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, []);

    return (
        <>
        <h1 id="HeaderNYT">New York Times Bestseller List</h1>
        <div className="page page-enter">
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
                            <TableCell><strong>{index +1}.</strong> {book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        </>
    )
}

export default TopList;
