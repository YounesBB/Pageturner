import React, { useState, useEffect } from "react"
import { newBook } from "../api/books"
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
    Input,
    Label,
    makeStyles,
} from "@fluentui/react-components"
import { BookAdd24Regular } from "@fluentui/react-icons"
import { CompoundButton } from "@fluentui/react-components"
import { fetchBookInfo } from "../api/bookCover"


const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
})


//Add Book component that let's us add a book to our library when clicking 'AddBook' button

export const AddBook = ({ onAddBook }) => {
    const styles = useStyles()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [bookGenre, setBookGenre] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [pages, setPages] = useState('')
     // initially set state to an empty array

    // function that handles 'submit' button. When clicked, inputed book should be added, and dialog is closed.
     const handleSubmit = async(ev) => {
        ev.preventDefault()
        const bookInfo = await fetchBookInfo(bookTitle, bookAuthor)
        let coverImage = "", isbn = ""
        if (bookInfo) {
            coverImage = bookInfo.coverImage
            isbn = bookInfo.isbn
        }
        if (!isbn) {
            //generate fake isbn
            isbn = `noisbn-${Math.floor(Math.random() * 1000000000)}`
        }
        onAddBook(bookTitle, bookAuthor, releaseYear, bookGenre, bookDescription, pages, coverImage, isbn)
        setIsDialogOpen(false)
         console.log(coverImage)
         console.log(isbn)
        newBook(bookTitle, bookAuthor, releaseYear, bookGenre, bookDescription, pages, coverImage, isbn)
            .then((data) => {
                // update the books state with the new book
                // call the onAddBook function to update the parent component's state
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // function for closing dialog. Called when 'Cancel' button is clicked
    const handleDismiss = () => {
        setIsDialogOpen(false)
    }

    


    // logic for when dialog is opened, and what dialog should display
    return (
        <>
            <Dialog modalType="modal" open={isDialogOpen}>
                <DialogTrigger>
                    <CompoundButton style={{ marginBottom: "20px", backgroundColor: "rgba(0, 128, 0, 0.5)", float: "right", color: "white", }}
                        icon={<BookAdd24Regular />}
                        secondaryContent=""
                        onClick={() => setIsDialogOpen(true)}
                    > Add book
                    </CompoundButton>
                </DialogTrigger>
                <DialogSurface aria-describedby={undefined}>
                    <DialogBody>
                        <DialogTitle>Add a book to your library</DialogTitle>
                        <DialogContent className={styles.content}>
                            <Label required htmlFor={"title-input"}>
                                Book title
                            </Label>
                            <Input required type="title" id={"title-input"} onChange={event => setBookTitle(event.target.value)} />
                            <Label required htmlFor={"author-input"}>
                                Author
                            </Label>
                            <Input required type="author" id={"author-input"} onChange={event => setBookAuthor(event.target.value)} />
                            <Label required htmlFor={"releaseYear-input"}>
                                Release Year
                            </Label>
                            <Input required type="releaseYear" id={"releaseYear-input"} onChange={event => setReleaseYear(event.target.value)} />
                            <Label required htmlFor={"genre-input"}>
                                Genre
                            </Label>
                            <Input required type="genre" id={"genre-input"} onChange={event => setBookGenre(event.target.value)} />
                            <Label required htmlFor={"description-input"}>
                                Description
                            </Label>
                            <Input required type="description" id={"description-input"} onChange={event => setBookDescription(event.target.value)} />
                            <Label required htmlFor={"pages-input"}>
                                # Pages
                            </Label>
                            <Input required type="pages" id={"pages-input"} onChange={event => setPages(event.target.value)} />
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary" onClick={handleDismiss}>Cancel</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary" onClick={handleSubmit}>
                                Add
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </>
    );
}
