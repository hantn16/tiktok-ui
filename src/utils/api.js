import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
