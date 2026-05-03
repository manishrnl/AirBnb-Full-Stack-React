import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const BookRooms = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Safe extraction of roomDetails , hotelName
    const roomDetails = location.state?.roomDetails;
    const hotelName = location.state?.hotelName;

    useEffect(() => {
        document.title = "Book Rooms - Hotel Booking";

        if (!roomDetails) {
            console.warn("No room details found, redirecting...");
            navigate("/rooms");
        }
    }, [roomDetails, navigate]);

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const formatDate = (date) => date.toISOString().split("T")[0];

    const [booking, setBooking] = useState({
        roomsCount: 1,
        checkInDate: formatDate(today),
        checkOutDate: formatDate(tomorrow),
        guests: [{name: "", gender: "", age: ""}],
        bookingStatus: "PENDING",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBooking((prev) => ({...prev, [name]: value}));
    };

    const handleGuestChange = (index, e) => {
        const {name, value} = e.target;
        const updatedGuests = [...booking.guests];
        updatedGuests[index][name] = value;
        setBooking((prev) => ({...prev, guests: updatedGuests}));
    };

    const addGuest = () => {
        setBooking((prev) => ({
            ...prev,
            guests: [...prev.guests, {name: "", gender: "", age: ""}],
        }));
    };

    const removeGuest = (index) => {
        if (booking.guests.length > 1) {
            const updatedGuests = booking.guests.filter((_, i) => i !== index);
            setBooking((prev) => ({...prev, guests: updatedGuests}));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/bookings/details", {state: {booking, roomDetails, hotelName}});
    };

    if (!roomDetails) return null;

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Book Your Room</h2>

            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
                {/* Section 1: Room Info (Read Only) */}
                <div className="row mb-4 bg-light p-3 rounded">
                    <h5 className="mb-3">Selected Room Details</h5>

                    <div className="col-md-4">
                        <label className="form-label text-muted small">Hotel Name</label>
                        <input
                            type="text" // ✅ Fixed: Was "number", changed to "text"
                            className="form-control bg-white"
                            // ✅ Fixed: Accessing the hotel object from your Java Entity
                            value={hotelName || "N/A"}
                            readOnly
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label text-muted small">Room Type</label>
                        <input
                            type="text"
                            className="form-control bg-white"
                            value={roomDetails.type || "N/A"}
                            readOnly
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label text-muted small">Price per Night</label>
                        <input
                            type="text"
                            className="form-control bg-white"
                            value={`₹${roomDetails.basePrice || 0}`}
                            readOnly
                        />
                    </div>
                </div>

                {/* Section 2: Booking Options */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Number of Rooms</label>
                        <input
                            type="number"
                            className="form-control"
                            name="roomsCount"
                            value={booking.roomsCount}
                            min={1}
                            max={roomDetails.totalCount} // Optional: limit to available rooms
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Check-In Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="checkInDate"
                            value={booking.checkInDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Check-Out Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="checkOutDate"
                            value={booking.checkOutDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Section 3: Guest Details */}
                <h5 className="mt-4 mb-3">Guest Information</h5>
                {booking.guests.map((guest, index) => (
                    <div key={index} className="row mb-3 align-items-end border-bottom pb-3">
                        <div className="col-md-4">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={guest.name}
                                onChange={(e) => handleGuestChange(index, e)}
                                placeholder="Enter guest name"
                                required
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Gender</label>
                            <select
                                className="form-select"
                                name="gender"
                                value={guest.gender}
                                onChange={(e) => handleGuestChange(index, e)}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                min={0}
                                value={guest.age}
                                onChange={(e) => handleGuestChange(index, e)}
                                required
                            />
                        </div>
                        <div className="col-md-2">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeGuest(index)}
                                disabled={booking.guests.length === 1}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button type="button" className="btn btn-outline-secondary px-4"
                            onClick={addGuest}>
                        + Add Another Guest
                    </button>
                    <button type="submit" className="btn btn-primary px-5">
                        Proceed to Confirmation
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookRooms;