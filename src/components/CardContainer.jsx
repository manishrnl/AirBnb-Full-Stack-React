import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard.jsx";

const BASE_URL = "http://localhost:8080"; // update if different

const CardContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [price, setPrice] = useState(10000); // slider value (max price)

    const fetchRooms = async (sortBy, maxPrice) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/admin/hotels/1/rooms/search`,
                {
                    sortBy: sortBy || null,
                    maxPrice: maxPrice || null,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            console.log("Response:", response.data);
            setRooms(response.data.content || []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching rooms:", error);
            setError("Failed to load rooms");
            setLoading(false);
        }
    };


    useEffect(() => {
        setLoading(true);
        fetchRooms(sortOption, price);
    }, [sortOption, price]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    if (loading) return <p className="text-center py-5">Loading rooms...</p>;
    if (error) return <p className="text-center py-5 text-danger">{error}</p>;

    return (
        <div className="container py-5" id="rooms">
            <div>
                <h2 className="text-center mb-5">Our Rooms</h2>
            </div>

            {/* Sort & Price Filter Section */}
            <div className="flex flex-wrap items-center gap-6 mb-5 justify-center">
                <div>
                    <p>Sort Room By:</p>
                    <select
                        className="border border-gray-300 rounded-md p-2"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">Select</option>

                        <option value="size">Size</option>
                        <option value="availability">Availability</option>
                    </select>
                </div>

                <div className="flex flex-col items-start">
                    <p>Filter by Price: ₹{price}</p>
                    <input
                        type="range"
                        min="500"
                        max="20000"
                        step="500"
                        value={price}
                        onChange={handlePriceChange}
                        className="w-64 accent-blue-600"
                    />
                </div>
            </div>

            {/* Room Cards */}
            {rooms.length === 0 ? (
                <p className="text-center">No rooms available</p>
            ) : (
                <div className="row g-4">
                    {rooms.map((room) => (
                        <div key={room.id} className="col-md-6 col-lg-3">
                            <SingleCard
                                image={room.photos[0]}
                                city={room.city}
                                type={room.type}
                                amenities={room.amenities.join(" , ")}
                                price={`Price: ₹${room.basePrice}`}
                                buttonText="Book Now"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardContainer;
