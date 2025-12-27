import axios from "axios";

const api = axios.create({
  baseURL: "https://creative-showcase-amarnath-kumar.onrender.com",
  withCredentials: true, // IMPORTANT for JWT cookies
});

export default api;
