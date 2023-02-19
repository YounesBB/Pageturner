import { useState } from "react"
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

const columns = [
    { columnKey: "title", label: "Book title", icon: <BookOpen24Regular/> },
    { columnKey: "author", label: "Author", icon: <PersonEdit24Regular/> },
    { columnKey: "year", label: "Publication date", icon: <CalendarLtr24Regular/> },
]

export const BookList = ({books}) => {

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
