import { Route, Routes, Link} from "react-router-dom"
import { Home } from "./pages/Home"
import { SearchResults } from "./pages/SearchResults";
import { NewBook } from "./pages/NewBook";
import logo from './logo.jpeg';
import './index.css';



export const App = () => {
    return (
    <>
    <nav id="navbar">
        <ul>
            <li id ="home">
                <Link to="/">
                    <img src={logo} alt="Logo" id="logo"/>
                </Link>
            </li>
            <li id ="Search">
                <Link to="/SearchResults">Search</Link>
            </li>
            <li id="newBook">
				<Link to="/newbook">New Book</Link>
			</li>
        </ul>
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchResults" element={<SearchResults />} />
        <Route path="/newbook" element={<NewBook />} />
        <Route />
    </Routes>
    </>
    );
}

export default App;