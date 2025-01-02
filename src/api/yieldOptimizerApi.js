import axios from "axios";

const API = "https://4636-120-188-38-104.ngrok-free.app"

const apiClient = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
