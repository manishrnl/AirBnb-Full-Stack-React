// const BASE_URL = "https://airbnb-full-stack-5qqf.onrender.com";

import axios from "axios";
export const BASE_URL = "http://localhost:8080/api/v1";

export const getAllRoomsByHotelId = async (hotelId) => {
    const response = await axios.get(`${BASE_URL}/admin/hotels/${hotelId}/rooms/allRoomsByHotelId`, {
        withCredentials: true,
    });
    return response.data;
};

export const loadRoomByRoomId = async () => {
    const response = await axios.get(`${BASE_URL}/rooms/${roomId}`, {
        withCredentials: true,
    });
    return response.data;
};

export const loadHotelsByHotelId = async () => {
    const response = await axios.get(`${BASE_URL}/admin/hotels/allHotels`, {
        withCredentials: true,
    });
    return response.data;
};
export const getAllHotels = async () => {
    const response = await axios.get(`${BASE_URL}/admin/hotels/allHotels`, {
        withCredentials: true,
    });
    return response.data;
};

export const getHotelnameByRoomId = async (roomId) => {
    const response = await axios.get(`${BASE_URL}/rooms/${roomId}/name`, {
        withCredentials: true,
    });
    return response.data;
};
export const addUser = (user) => {
    return axios.post("http://localhost:8080/users", user);
};
// Update a user
export const updateUser = (id, user) =>
    axios.put(`http://localhost:8080/users/${id}`, user);

// Delete a user
export const deleteUser = (id) =>
    axios.delete(`http://localhost:8080/users/${id}`);
