import axios from "axios";

// Endereço padrão da API Spring Boot do Vitrine.
// Se o back-end estiver em outro endereço, ajuste baseURL aqui.
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: { "Content-Type": "application/json" },
});

export default api;
