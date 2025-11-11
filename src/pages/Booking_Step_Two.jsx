// src/pages/Booking_Step_Two.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking_Step_Two = () => {
    useEffect(() => {
        document.title = "Booking Details - Hotel Booking";
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const { booking } = location.state || {};

    if (!booking) {
        return (
            <div className="container my-5">
                <div className="text-center py-5">
                    <h3 className="text-danger">No booking details found.</h3>
                    <button
                        className="btn btn-outline-primary mt-3"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const hotelImage = booking.hotel?.photos?.[0] ||
        booking.room?.photos?.[0] ||
        "https://tse1.mm.bing.net/th/id/OIP.FtudhIBH-HYhxMpS4TU-sAHaE8?pid=Apihttps://tse1.mm.bing.net/th/id/OIP.FtudhIBH-HYhxMpS4TU-sAHaE8?pid=Api";

    return (
        <div className="container my-5">

            {/* Hero Banner */}
            <div
                className="position-relative rounded-4 overflow-hidden mb-5"
                style={{ height: "300px" }}
            >
                <img
                    src={hotelImage}
                    alt={booking.hotel?.name || booking.room?.title}
                    className="w-100 h-100 object-fit-cover"
                />
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))"
                    }}
                />
                <div
                    className="position-absolute bottom-0 start-0 text-white p-4"
                    style={{ zIndex: 2 }}
                >
                    <h2 className="fw-bold">{booking.hotel?.name || "Hotel Name"}</h2>
                    <h5>{booking.room?.title || "Room Type"}</h5>
                </div>
            </div>

            <h2 className="text-center mb-5 fw-bold">Booking Summary</h2>

            {/* User Info */}
            <div className="card shadow-lg mb-4 border-0 rounded-4">
                <div className="card-body">
                    <h5 className="card-title mb-3">User Information</h5>
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td>{booking.user?.name || "N/A"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{booking.user?.email || "N/A"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>{booking.user?.phone || "N/A"}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Hotel & Room Info */}
            <div className="card shadow-lg mb-4 border-0 rounded-4">
                <div className="card-body">
                    <h5 className="card-title mb-3">Hotel & Room Details</h5>
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                            <tr>
                                <th scope="row">Hotel</th>
                                <td>{booking.hotel?.name || "N/A"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Room</th>
                                <td>{booking.room?.title || "N/A"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Rooms Count</th>
                                <td>{booking.roomsCount}</td>
                            </tr>
                            <tr>
                                <th scope="row">Check-In</th>
                                <td>{booking.checkInDate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Check-Out</th>
                                <td>{booking.checkOutDate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Status</th>
                                <td>
                                        <span
                                            className={`badge ${
                                                booking.bookingStatus === "PENDING"
                                                    ? "bg-warning text-dark"
                                                    : "bg-success"
                                            }`}
                                        >
                                            {booking.bookingStatus}
                                        </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Amount</th>
                                <td className="fs-5 fw-bold text-success">
                                    ₹{booking.amount || "0"}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Guests */}
            <div className="card shadow-lg mb-4 border-0 rounded-4">
                <div className="card-body">
                    <h5 className="card-title mb-3">Guest Details</h5>
                    {booking.guests?.length ? (
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="table-light">
                                <tr>
                                    <th>Sl. No </th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                </tr>
                                </thead>
                                <tbody>
                                {booking.guests.map((guest, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{guest.name}</td>
                                        <td>{guest.gender}</td>
                                        <td>{guest.age}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>No guests added.</p>
                    )}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <button
                    className="btn btn-outline-secondary btn-lg"
                    onClick={() => navigate("/bookings")}
                >
                    Back to Previous Page
                </button>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate("/bookings/details/payments", { state: { booking } })}
                >
                    Continue to Payment
                </button>
            </div>
        </div>
    );
};

export default Booking_Step_Two;
