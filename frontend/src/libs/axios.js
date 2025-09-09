import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:6969/notes"
  : "/notes";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
