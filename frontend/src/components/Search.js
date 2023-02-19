
import React, { useState } from "react"

export const Search = ({ onSearchChange }) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
        onSearchChange(event.target.value)
    }

    // returns header and search field on search page
    return (
        <div>
            <h1> Search for a book in library:
                <input
                type="text"
                placeholder="Search books"
                value={searchTerm}
                onChange={handleSearchChange}
                style = {{position: 'relative', left: '50px', width: '150px', height: '30px' }}
            />
            </h1> 
            <br/>
            
        </div>

    )
}
