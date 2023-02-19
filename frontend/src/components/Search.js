
import { useState } from "react"

export const Search = ({onSearchChange}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
        onSearchChange(event.target.value)
    }

    return (
        <input
            type="text"
            placeholder="Search books"
            value={searchTerm}
            onChange={handleSearchChange}
        />
    )
}
