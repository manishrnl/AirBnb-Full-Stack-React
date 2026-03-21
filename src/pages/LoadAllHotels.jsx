import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleCard from "../components/SingleCard.jsx";
import { getAllHotels } from "../service/UserService.jsx";

const LoadAllHotels = () => {
    const [hotels, setHotels] = useState([]);
   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // FIXED: Now navigates using the hotelId in the URL path
    const handleLoadHotelDetails = (hotelId, name) => {
        if (hotelId) {
            navigate(`/hotel/${hotelId}/rooms`, { state: { hotelName: name } });
        } else {
            console.error("Hotel ID is undefined");
            alert("Could not load rooms: Hotel ID missing.");
        }
    };

    useEffect(() => {
        const fetchBackendHotels = async () => {
            try {
                setLoading(true);
                const data = await getAllHotels();
                // Adjusting based on common API response structures
                const hotelList = data?.content || data || [];
                setHotels(hotelList);
            } catch (err) {
                console.error(
                    "Backend Error Details:",
                    err.response?.data || err.message,
                );
                setError(
                    "The server encountered an error while fetching hotels.",
                );
            } finally {
                setLoading(false);
            }
        };
        fetchBackendHotels();
    }, []);

    if (loading)
        return (
            <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (error) return <p className="text-center py-5 text-danger">{error}</p>;

    return (
        <div className="container py-5" id="hotels">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="heading-group">
                    <h2 className="fw-bold mb-0">Explore Top Hotels</h2>
                    <p className="text-muted mb-0">
                        Find the perfect stay for your next trip
                    </p>
                </div>
                <span className="badge bg-primary rounded-pill px-3 py-2">
                    {hotels.length} properties found
                </span>
            </div>

            <div className="row g-4">
                {hotels.length > 0 ? (
                    hotels.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                        >
                            <SingleCard
                                photos={hotel.photos}
                                city={hotel.city}
                                type={hotel.name}
                                amenities={hotel.location || "Prime Location"}
                                price={`View available rooms`}
                                buttonText="View Rooms"
                                onButtonClick={() => {
                                    handleLoadHotelDetails(
                                        hotel.id,
                                        hotel.name,
                                    );
                                   
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <h4>No hotels found.</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoadAllHotels;
