
import { TableCell, TableRow } from "@fluentui/react-components"

export const BookRow = ({ book, onBookClick }) => {

    const handleClick = (event) => {
        if (onBookClick) {
            onBookClick(book)
        }
    }

    // what a single book row should display. Called on in BookList
    return (
        <TableRow style={{ borderBottom: '1px solid rgba(0, 128, 0, 0.2)' }} onClick = {handleClick}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.year}</TableCell>
        </TableRow>
    )
}
