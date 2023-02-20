import { Route, Routes, Link } from "react-router-dom"
import { AppPage } from "./components/AppPage"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { SearchPage } from "./pages/SearchPage"
import { MyBooks } from "./pages/MyBooks"
import "./index.css"
import axios from 'axios';


export const App = () => {
    // Make a GET request to retrieve all books
    axios.get('http://localhost:4000/api/books')
    .then(response => {
        // Handle the response data
        const books = response.data;
        console.log('All books:', books);
    })
    .catch(error => {
    // Handle any errors
        console.error(error);
    });
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
