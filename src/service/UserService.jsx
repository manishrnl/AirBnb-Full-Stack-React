// src/services/userService.js
import axios from "axios";
const BASE_URL = "https://airbnb-full-stack-5qqf.onrender.com";
// Fetch all users


export const addUser = (user) => {
    return axios.post("http://localhost:8080/users", user);
};
// Update a user
export const updateUser = (id, user) => axios.put(`http://localhost:8080/users/${id}`, user);

// Delete a user
export const deleteUser = (id) => axios.delete(`http://localhost:8080/users/${id}`);

