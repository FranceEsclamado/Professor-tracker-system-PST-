import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/professors",
});

// READ
export const getProfessors = () => API.get("/");

// CREATE
export const createProfessor = (data) => API.post("/", data);

// DELETE
export const deleteProfessor = (id) => API.delete(`/${id}`);

// UPDATE
export const updateProfessor = (id, data) =>
  API.put(`/${id}`, data);