import axios from "axios";

const api = axios.create({
  baseURL: "https://motors-shop-21uq.onrender.com",
  timeout: 5000,
});

export default api;
