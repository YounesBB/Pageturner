// import axios from 'axios';
// const baseUrl = "http://localhost:4000/api/users";

// export const loginUser = async (username, password) => {
//   const response = await axios.post(`${baseUrl}/login`, {
//     username,
//     password
//   });
//   return response.data;
// };

// export const registerUser = async (name, email, password) => {
//   const response = await axios.post(`${baseUrl}`, {
//     name,
//     email,
//     password
//   });
//   return response.data;
// };

// export const getUserProfile = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.get(`${baseUrl}/me`, config);
//   return response.data;
// };

import axios from 'axios';
const baseUrl = "http://localhost:4000/api";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, {
      email: username,
      password: password
    });
    return response.data.token;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code outside the 2xx range
      throw new Error(error.response.data.message);
    } else {
      // Something happened in setting up the request that triggered an error
      throw new Error("Invalid email or password");
    }
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/users/register`, {
      name,
      email,
      password
    });
    return response.data.token;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code outside the 2xx range
      throw new Error(error.response.data.message);
    } else {
      // Something happened in setting up the request that triggered an error
      throw new Error("Unable to register user");
    }
  }
};

export const getUserProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseUrl}/users/me`, config);
  return response.data;
};
