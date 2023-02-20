import React, { useState } from "react"
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
} from "@fluentui/react-components"

import { getNYTBooks } from "../api/nytbooks"

const columns = [
    { columnKey: "title", label: ""},
    { columnKey: "author", label: ""}
]

const TopList = () => {

    const [books, setBooks] = useState([])

    // sets books from nyt list
    getNYTBooks(books => setBooks(books))
    
    // returns header and bestseller's list from New York Times
    return (
        <div>
            <h1>New York Times Bestseller List</h1>
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
    )
}

export default TopList