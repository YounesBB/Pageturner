import { useState } from "react"
import { BookOpen24Regular, CalendarLtr24Regular, PersonEdit24Regular } from "@fluentui/react-icons"
import {
    TableBody,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
} from "@fluentui/react-components"

import { BookRow } from "./BookRow"

import { ShowBookInfo } from "./ShowBookInfo"

const columns = [
    {
      columnKey: "coverImage",
      label: "Cover Image",
      render: (book) => (
        <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} />
      ),
      icon: <BookOpen24Regular />,
    },
    { columnKey: "title", label: "Book title", icon: <BookOpen24Regular /> },
    { columnKey: "author", label: "Author", icon: <PersonEdit24Regular /> },
    { columnKey: "releaseYear", label: "Release Year", icon: <CalendarLtr24Regular /> },
  ];

export const BookList = ({books}) => {

    const [currentBook, setCurrentBook] = useState(null)

    // function that sends current book to book you click on
    // triggers dialog to open 
    const handleBookClick = (book) => {
        console.log("click book", book)
        setCurrentBook(book)
    }
    
    // sets current book to null
    // used when exiting dialog
    const handleResetBook = () => {
        setCurrentBook(null)
    }

    // logic for displaying list of books using a table
    return (
        <div>
            <ShowBookInfo book={currentBook} onResetBook={handleResetBook}/>
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
                    {books.map((book, index) => <BookRow key={`${index}-${book.title}`} book={book} onBookClick={handleBookClick}/>)}
                </TableBody>
            </Table>
        </div>
    )
}
