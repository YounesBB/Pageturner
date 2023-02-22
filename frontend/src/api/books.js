import axios from 'axios';


const baseUrl = "http://localhost:4000/api";


////////////////////////// - It may be a good idea to change all these to async/await - //////////////////////////
export const getBooks = () => {
    
    return axios.get(`${baseUrl}/books`)
    .then(response => {
      // Return the books data as JSON
      //console.log("get worked")
      let books = response.data
      //console.log(books)
      return books;
      //return response.data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

