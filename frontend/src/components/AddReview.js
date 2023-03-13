import React, { useState, useEffect } from "react"
import { newBook } from "../api/books"
import { MessageBar, MessageBarType } from '@fluentui/react';
import { css } from '@fluentui/react';
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
import {addReview} from "../api/reviews"


const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
})


//Add Book component that let's us add a book to our library when clicking 'AddBook' button

export const AddReview = ({onAddReview}) => {
    const styles = useStyles()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isRatingValid, setIsRatingValid] = useState(true);
    const [isCommentValid, setIsCommentValid] = useState(true);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    // initially set state to an empty array

    // function that handles 'submit' button. When clicked, inputed review should be added to review list, and dialog is closed.
    const handleSubmit = async (ev) => {

        // ev.preventDefault()
        // const bookInfo = await fetchBookInfo(bookTitle, bookAuthor)
        // let coverImage = "", isbn = ""
        // if (bookInfo) {
        //     coverImage = bookInfo.coverImage
        //     isbn = bookInfo.isbn
        // }
        // if (!isbn) {
        //     //generate fake isbn
        //     isbn = `noisbn-${Math.floor(Math.random() * 1000000000)}`
        // }
        // onAddBook(bookTitle, bookAuthor, releaseYear, bookGenre, bookDescription, pages, coverImage, isbn)
        // setIsDialogOpen(false)
        //  console.log(coverImage)
        //  console.log(isbn)
        // newBook(bookTitle, bookAuthor, releaseYear, bookGenre, bookDescription, pages, coverImage, isbn)
        //     .then((data) => {
        //         // update the books state with the new book
        //         // call the onAddBook function to update the parent component's state
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     })
    }

    // function for closing dialog. Called when 'Cancel' button is clicked
    const handleDismiss = () => {
        setIsDialogOpen(false)
    }

    function handleRatingInput(event) {
        const inputValue = event.target.value;
        if (inputValue <= 10) {
            setIsRatingValid(true);
            setRating(inputValue)
        } else {
            setIsRatingValid(false);
        }
    }

    const handleCommentInput = (event) => {
        const value = event.target.value;
        setIsCommentValid(validateInput(value));
        setComment(value)
    };

    const validateInput = (value) => {
        return value.trim().split(" ").length > 0;
    };

    const newReview = (rating, review) => {

    }

    const handleSave = () => {
        if ((!rating) && !comment && !validateInput(comment)) {
            setIsRatingValid(false);
            setIsCommentValid(false);
            return;
        }
        if ((!rating)) {
            setIsRatingValid(false)
            return;
        }
        if ((!comment) || !validateInput(comment)) {
            setIsCommentValid(false)
            return;
        }
        onAddReview(rating, comment)
        setIsDialogOpen(false)
        addReview(rating, comment)
        
    }

    // logic for when dialog is opened, and what dialog should display
    return (
        <>
            <Dialog modalType="modal" open={isDialogOpen}>
                <DialogTrigger>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <CompoundButton
                            styles={{
                                root: {
                                    backgroundColor: "rgba(0, 128, 0, 0.5)",
                                    border: "none",
                                    color: "white",
                                    transition: "all 0.3s ease-in-out",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
                                },
                                rootHovered: {
                                    backgroundColor: "rgba(0, 128, 0, 1)",
                                    cursor: "pointer"
                                }
                            }}
                            icon={<BookAdd24Regular />}
                            secondaryContent=""
                            onClick={() => setIsDialogOpen(true)}
                        >
                            Add review
                        </CompoundButton>
                    </div>
                </DialogTrigger>
                <DialogSurface aria-describedby={undefined}>
                    <DialogBody>
                        <DialogTitle>Add a book review</DialogTitle>
                        <DialogContent className={styles.content}>
                            <Label required htmlFor={"rating-input"}>
                                Rating between 1 and 10:
                            </Label>
                            <Input required type="number" id={"rating-input"} onInput={handleRatingInput} />
                            {!isRatingValid && (
                                <MessageBar messageBarType={MessageBarType.error}>
                                    The input value must be between 1 and 10.
                                </MessageBar>
                            )}
                            <Label required htmlFor={"comment-input"}>
                                Written review:
                            </Label>
                            <Input required type="text" id={"comment-input"} onChange={handleCommentInput} />
                            {!isCommentValid && (
                                <MessageBar messageBarType={MessageBarType.error}>
                                    Please enter a text of at least one word.
                                </MessageBar>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary" onClick={handleDismiss}>Cancel</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary" onClick={handleSave}>
                                Add
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </>
    );
}


