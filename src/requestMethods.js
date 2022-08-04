import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/';
// export const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
export const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
console.log(currentUser);
console.log(TOKEN);
