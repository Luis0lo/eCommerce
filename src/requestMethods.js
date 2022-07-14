import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2QxOWNmNTE2NTRhZTRhYmVkNzE4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzczMDE0NiwiZXhwIjoxNjU3OTg5MzQ2fQ.3peXdFhsYj8w7MjJWJMvW-nET797F84qElyVNMTVj_g';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
