import { Route, Routes, Link } from "react-router-dom"
import { AppPage } from "./components/AppPage"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { SearchPage } from "./pages/SearchPage"
import { MyBooks } from "./pages/MyBooks"
import "./index.css"
import { getBookByTitle, getAllBooks, getBookById, deleteBookById, createNewBook } from "./api/booksAPI"
import { getAllAuthors, getAuthorById, getAuthorByFullName, createNewAuthor, deleteAuthorByFullName, deleteAuthorById } from "./api/authorsAPI"
import { useState, useEffect } from "react"

export const App = () => {
    // TESTING API CALLS FOR BOOKS
    //const [books, setBooks] = useState([]);

    //useEffect(() => {
        //getAllBooks().then((data) => setBooks(data));
    //}, []);

    // TESTING API CALLS FOR BOOKS
    //getBookByTitle("Kiterunner")
    //getBookById("63ef962ad3358870b331aef6")
    // This needs updated backend code to work 
    //createNewBook("Bird Man", "Brad Bird", 2004, "Action", "A family of superheroes", 100) 
    //deleteBookById("63f3a6dbcd29f2e0cbd58cd8") // this deletes the book in the database so its commented out

    // TESTING API CALLS FOR AUTHORS
    //getAllAuthors()
    //getAuthorById("63ee01f1d5d40ea914b440d9")
    //getAuthorByFullName("younes")
    //Create a new author needs to fix ref
    //createNewAuthor("Alibaba Mogadeen", 1968, ["63f23a1a53a8ed0be358bf5b", "63ef962ad3358870b331aef6"])
    //deleteAuthorByFullName("Franz Kafka")
    //deleteAuthorById("63f4bb75f0cd188bbfc805d8")



    return (
        <>
            <NavBar />
            <AppPage>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/mybooks" element={<MyBooks />} />
                    <Route />
                </Routes>
            </AppPage>
        </>
    )
}

export default App
