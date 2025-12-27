import axios from "axios";

const api = axios.create({
  baseURL: "https://creative-showcase-amarnath-kumar.onrender.com/api/v1",
  withCredentials: true, // IMPORTANT for JWT cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
