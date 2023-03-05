import { TableCell, TableRow } from "@fluentui/react-components";
import bookIMG from "../book-removebg-preview.png";

export const BookRow = ({ book, onBookClick }) => {

    const handleClick = (event) => {
        if (onBookClick) {
            onBookClick(book);
        }
    }

    return (
        <TableRow style={{ borderBottom: '1px solid rgba(0, 128, 0, 0.2)' }} onClick={handleClick}>
            <TableCell>
                <img src={bookIMG} alt="Book cover" style={{ width: "100px", height: "auto" }} />
            </TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.releaseYear}</TableCell>
        </TableRow>
    )
}


