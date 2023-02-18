import { Route, Routes, Link } from "react-router-dom"
import { AppPage } from "./components/AppPage"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { SearchResults } from "./pages/SearchResults"
import { NewBook } from "./pages/NewBook"
import logo from "./logo.jpeg"
import "./index.css"


export const App = () => {
    return (
        <>
            <NavBar/>
            <AppPage>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/SearchResults" element={<SearchResults/>}/>
                    <Route path="/newbook" element={<NewBook/>}/>
                    <Route/>
                </Routes>
            </AppPage>
        </>
    )
}

export default App
