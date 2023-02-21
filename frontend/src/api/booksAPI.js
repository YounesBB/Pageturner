import axios from "axios";

const baseUrl = "http://localhost:4000/api"; // this is the base url for the backend

//Get all books
export const getAllBooks = () => {
    // Make a GET request to retrieve all books
    axios.get(`${baseUrl}/books`)
        .then(response => {
            // Handle the response data
            const books = response.data;
            console.log('All books:', books);
            return books;
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
};

//Get a book by id
export const getBookById = (id) => {
    // Make a GET request to retrieve a book by id
    axios.get(`${baseUrl}/books/${id}`)
        .then(response => {
            // Handle the response data
            const book = response.data;
            console.log('Book:', book);
            return book;
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}

//Get a book by title

export const getBookByTitle = (title) => {
    // Make a GET request to retrieve a book by title
    axios.get(`${baseUrl}/books/title/${title}`)
        .then(response => {
            // Handle the response data
            const book = response.data;
            console.log('Book:', book);
            return book;
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}

// create a new book
export const createNewBook = (title, author, year, genre, desc, pages) => {
    // Make a POST request to create a new book
    axios.post(`${baseUrl}/books`, {
        title: title,
        author: author,
        releaseYear: year,
        genre: genre,
        description: desc,
        pages: pages
    }).then(response => {
        // Handle the response data
        const book = response.data;
        console.log('Created new book:', book);
        return book;
    })
        .catch(error => {
            // Handle any errors
            console.error(error);
        }
        );
}

// PATCH for updating a book will come later // TODO


// Delete a book by id
export const deleteBookById = (id) => {
    // DELETE request to delete a book by id
    axios.delete(`${baseUrl}/books/${id}`)
        .then(() => {
            console.log(`Book with id ${id} deleted`);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}
