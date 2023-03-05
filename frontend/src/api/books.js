import axios from 'axios';


const baseUrl = "http://localhost:4000/api";


////////////////////////// - It may be a good idea to change all these to async/await - //////////////////////////
export const getBooks = () => {
    
    return axios.get(`${baseUrl}/books`)
    .then(response => {
      // Return the books data as JSON
      //console.log("get worked")
      let books = response.data
      console.log(books)
      return books;
      //return response.data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}


export const newBook = (title, author, year, genre, desc, pages, coverImage) => {
  return axios.post(`${baseUrl}/books`, {
      title: title,
      author: author,
      releaseYear: year,
      genre: genre,
      description: desc,
      pages: pages,
      coverImage: coverImage
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}

