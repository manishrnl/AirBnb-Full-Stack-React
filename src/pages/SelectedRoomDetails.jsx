import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { loadRoomByRoomId, getHotelnameByRoomId } from "../service/UserService";

const SelectedRoomDetails = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
  
    // 1. Initialize State
    const [room, setRoom] = useState(location.state?.roomDetails || null);
    // Use the name from state if available, otherwise start empty
    const [hotelName, setHotelName] = useState(location.state?.hotelName || "Error Loading Name");
    const [loading, setLoading] = useState(!location.state?.roomDetails);

    useEffect(() => {
        const fetchDetails = async () => {
            // Only fetch if data is missing (e.g., page refresh)
            if (!room || !hotelName) {
                try {
                    setLoading(true);

                    // Fetch both concurrently for speed
                    const [roomData, nameData] = await Promise.all([
                        loadRoomByRoomId(roomId),
                        getHotelnameByRoomId(roomId),
                    ]);

                    setRoom(roomData);

                    // Handle if nameData is an object or a string
                    const finalName =
                        typeof nameData === "object" ? nameData.name : nameData;
                    setHotelName(finalName || "Premium Hotel");
                } catch (error) {
                    console.error("Error loading room details:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchDetails();
    }, [roomId, room, hotelName]);

    if (loading)
        return (
            <div className="text-center py-5">
                <h3>Loading room details...</h3>
            </div>
        );
    if (!room)
        return (
            <div className="text-center py-5">
                <h3>Room not found.</h3>
            </div>
        );

    // --- Safety Mapping for Image ---
    const roomPhoto =
        room.photos?.[0] || room.image || "https://via.placeholder.com/800x500";

    const displayAmenities = () => {
        if (Array.isArray(room.amenities)) return room.amenities.join(", ");
        return room.amenities || "Wifi, AC, Room Service";
    };

    return (
        <div className="container py-5">
            <div className="card shadow-lg border-0 overflow-hidden">
                <div className="row g-0">
                    <div className="col-md-7">
                        <img
                            src={roomPhoto}
                            alt={room.title || "Room View"}
                            className="img-fluid w-100"
                            style={{
                                height: "100%",

                                minHeight: "450px",

                                objectFit: "cover",

                                display: "block", // Ensures it doesn't behave like inline text
                            }}
                            onError={(e) => {
                                e.target.src =
                                    "https://via.placeholder.com/800x500";
                            }}
                        />
                    </div>

                    <div className="col-md-5 p-4 d-flex flex-column justify-content-center">
                        {/* FIX: Ensure this matches the state variable name */}
                        <h2 className="fw-bold mb-1">
                            {hotelName || "Loading..."}
                        </h2>
                        <p className="text-muted mb-4">
                            {room.type || "Deluxe"} Room
                        </p>

                        <div className="mb-4">
                            <h5 className="border-bottom pb-2">
                                Room Specifications
                            </h5>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2">
                                    <strong>
                                        <i className="bi bi-people me-2"></i>
                                        Capacity:
                                    </strong>{" "}
                                    {room.capacity || "2"} Guests
                                </li>
                                <li className="mb-2">
                                    <strong>
                                        <i className="bi bi-stars me-2"></i>
                                        Amenities:
                                    </strong>{" "}
                                    <span className="text-capitalize">
                                        {displayAmenities()}
                                    </span>
                                </li>
                                <li className="mb-2">
                                    <strong>
                                        <i className="bi bi-door-open me-2"></i>
                                        Status:
                                    </strong>{" "}
                                    {room.totalCount > 0
                                        ? "Available"
                                        : "Fully Booked"}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-light p-4 rounded-3 border">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">
                                    Price per night
                                </span>
                                <h3 className="text-primary mb-0">
                                    ₹{room.basePrice || "0"}
                                </h3>
                            </div>

                            <button
                                className="btn btn-primary btn-lg w-100 shadow-sm"
                                onClick={() =>
                                    navigate("/bookings", {
                                        state: {
                                            roomDetails: room,
                                            hotelName: hotelName,
                                        },
                                    })
                                }
                            >
                                Book This Room
                            </button>

                            <button
                                className="btn btn-link w-100 mt-2 text-decoration-none text-muted"
                                onClick={() => navigate(-1)}
                            >
                                <i className="bi bi-arrow-left me-1"></i> Back
                                to Rooms
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedRoomDetails;
