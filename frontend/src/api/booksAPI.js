import axios from "axios";

//Get all books
export const getBooksAPI = () =>{
    // Make a GET request to retrieve all books
    axios.get('http://localhost:4000/api/books')
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
export const getBookByIdAPI = (id) =>{
    // Make a GET request to retrieve a book by id
    axios.get(`http://localhost:4000/api/books/${id}`)
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

export const getBookByTitleAPI = (title) =>{
    // Make a GET request to retrieve a book by title
    axios.get(`http://localhost:4000/api/books/title/${title}`)
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
export const createNewBookAPI = (title, author, year) =>{
    // Make a POST request to create a new book
    axios.post('http://localhost:4000/api/books', {
        title: title,
        authot: author,
        year: year
    }).then(response => {
    // Handle the response data
        const book = response.data;
        console.log('Book:', book);
        return book;
    })
    .catch(error => {
    // Handle any errors
        console.error(error);
    }
    );
}



