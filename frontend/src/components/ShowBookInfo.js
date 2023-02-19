
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
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

export const ShowBookInfo = ({ book, onResetBook }) => {
    const styles = useStyles()

    if (book === null) {
        return null
    }

    // dialog that shows book info
    return (
        <>
                <Dialog modalType="modal" open={book !== null} >
                    <DialogSurface aria-describedby={undefined}>
                        <DialogBody>
                            <DialogTitle>Book Information</DialogTitle>
                            <DialogContent className={styles.content}>
                                <Label htmlFor={"title-input"}>
                                    Book title: <small>{book.title}</small>
                                </Label>
                                <Label htmlFor={"author-input"}>
                                    Author: <small>{book.author}</small>
                                </Label>
                                <Label htmlFor={"pubdate-input"}>
                                    Publication date: <small>{book.year}</small>
                                </Label>
                            </DialogContent>
                            <DialogActions>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button appearance="secondary" onClick={onResetBook} >
                                        Close
                                    </Button>
                                </DialogTrigger>
                            </DialogActions>
                        </DialogBody>
                    </DialogSurface>
                </Dialog>
        </>
    )
}


