import React, { useState } from "react"
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

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
})

export const AddBook = ({onAddBook}) => {
    const styles = useStyles();
    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [publicationDate, setPublicationDate] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onAddBook(bookTitle, bookAuthor, publicationDate)
    }

    return (
        <Dialog modalType="non-modal">
            <DialogTrigger disableButtonEnhancement>
                <Button>Add book</Button>
            </DialogTrigger>
            <DialogSurface aria-describedby={undefined}>
                <form onSubmit={handleSubmit}>
                    <DialogBody>
                        <DialogTitle>Add book</DialogTitle>
                        <DialogContent className={styles.content}>
                            <Label required htmlFor={"title-input"}>
                                Book title
                            </Label>
                            <Input required type="title" id={"title-input"} onChange={event => setBookTitle(event.target.value)}/>
                            <Label required htmlFor={"author-input"}>
                                Author
                            </Label>
                            <Input required type="author" id={"author-input"} onChange={event => setBookAuthor(event.target.value)}/>
                            <Label required htmlFor={"pubdate-input"}>
                                Publication date
                            </Label>
                            <Input required type="pubdate" id={"pubdate-input"} onChange={event => setPublicationDate(event.target.value)}/>
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </form>
            </DialogSurface>
        </Dialog>
    );
};
/*
import { Button, Dialog, Form, FormButton, FormCheckbox, FormInput, Input, TextArea } from '@fluentui/react'
import React, { useState } from 'react'

  
export const AddBook = ({onAddBook}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [publicationDate, setPublicationDate] = useState('')
  
    const form = (
        <Form
        onSubmit={() => {
          alert('Form submitted')
        }}
      >
        <FormInput
          label="Title"
          name="bookTitle"
          id="book-title"
          onChange={event => setBookTitle(event.target.value)}
          required
          showSuccessIndicator={false}
        />
        <FormInput
          label="Author"
          name="name"
          id="author-name"
          onChange={event => setBookAuthor(event.target.value)}
          required
          showSuccessIndicator={false}
        />
        <FormInput
          label="Publication Date"
          name="date"
          id="publication-date"
          onChange={event => setPublicationDate(event.target.value)}
          required
          showSuccessIndicator={false}
        />
      </Form>
    )

    return (
      <Dialog
        // open={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => onAddBook(bookTitle, bookAuthor, publicationDate)}
        cancelButton="Cancel"
        confirmButton="Add"
        header="Add a new book"
        trigger={<Button content="Add Book" primary />}
        content={form}
      >
      </Dialog>
    );
  };
  
*/