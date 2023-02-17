import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewBook } from "./pages/NewBook"

export const App = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newbook" element={<NewBook />} />
        <Route />
    </Routes>
}
