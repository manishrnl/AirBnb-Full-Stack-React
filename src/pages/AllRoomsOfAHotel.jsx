import React, {useEffect, useState} from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom";
import {getAllRoomsByHotelId} from "../service/UserService";
import SingleCard from "../components/SingleCard";
import PremiumLoader from "../service/PremiumLoader.jsx";

const AllRoomsOfAHotel = () => {
    const {hotelId} = useParams();
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const hotelName = location.state?.hotelName || "Name Loading Error";
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await getAllRoomsByHotelId(hotelId);
                setRooms(data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, [hotelId]);

    if (loading) {
        return <PremiumLoader isDone={loading}/>;
    }
    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">Select a Room in Hotel {hotelName}</h2>
            <div className="row g-4">
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <div key={room.id} className="col-md-4">
                            <SingleCard
                                photos={room.photos}
                                city={room.type}
                                type={`Max Guests: ${room.capacity}`}
                                price={`₹${room.basePrice} / night`}
                                buttonText="View Room Details"
                                // FIX: Use backticks to pass the real room.id in the URL
                                onButtonClick={() =>
                                    navigate(`/room/${room.id}`, {
                                        state: {
                                            roomDetails: room,
                                            hotelName: hotelName,
                                        },
                                    })
                                }
                            />
                        </div>
                    ))
                ) : (
                    <div className="text-center col-12">
                        <p className="text-muted">
                            No rooms available for this hotel at the moment.
                        </p>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate("/home")}
                        >
                            Back to Hotels
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllRoomsOfAHotel;
