import axios from 'axios';
const baseUrl = "http://localhost:4000/api";
export const User = (username,password) => {
    return axios.post(`${baseUrl}/users`, {
       
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }