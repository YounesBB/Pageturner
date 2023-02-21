import { Route, Routes, Link } from "react-router-dom"
import { AppPage } from "./components/AppPage"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { SearchPage } from "./pages/SearchPage"
import { MyBooks } from "./pages/MyBooks"
import "./index.css"
import { getBookByTitleAPI, getBooksAPI } from "./api/booksAPI"


export const App = () => {
    console.log(getBookByTitleAPI("Kiterunner"))
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
