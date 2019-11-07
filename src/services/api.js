import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PORT ? `${window.location.origin}/api` : 'http://localhost:3333',
});

export default api;
