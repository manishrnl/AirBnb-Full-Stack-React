
// src/pages/BookRooms.jsx
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const BookRooms = () => {

    useEffect(() => {
        document.title = "Book Rooms - Hotel Booking";
    }, []); // Empty dependency array means it runs once on mount


    const navigate = useNavigate(); // ✅ for navigation

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date) => date.toISOString().split("T")[0];

    const [booking, setBooking] = useState({
        roomsCount: 1,
        checkInDate: formatDate(today),
        checkOutDate: formatDate(tomorrow),
        guests: [{ name: "", gender: "", age: "" }],
        bookingStatus: "PENDING",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking((prev) => ({ ...prev, [name]: value }));
    };

    const handleGuestChange = (index, e) => {
        const { name, value } = e.target;
        const updatedGuests = [...booking.guests];
        updatedGuests[index][name] = value;
        setBooking((prev) => ({ ...prev, guests: updatedGuests }));
    };

    const addGuest = () => {
        setBooking((prev) => ({
            ...prev,
            guests: [...prev.guests, { name: "", gender: "", age: "" }],
        }));
    };

    const removeGuest = (index) => {
        const updatedGuests = booking.guests.filter((_, i) => i !== index);
        setBooking((prev) => ({ ...prev, guests: updatedGuests }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to details page with booking data
        navigate("/bookings/details", { state: { booking } });
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Book Your Room</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Number of Rooms</label>
                    <input
                        type="number"
                        className="form-control"
                        name="roomsCount"
                        value={booking.roomsCount}
                        min={1}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
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

                <h5>Guests</h5>
                {booking.guests.map((guest, index) => (
                    <div key={index} className="row mb-3 align-items-end">
                        <div className="col-md-4">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={guest.name}
                                onChange={(e) => handleGuestChange(index, e)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
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
                        <div className="col-md-2">
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
                                className="btn btn-danger w-100 mt-2"
                                onClick={() => removeGuest(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button
                        type="button"
                        className="btn btn-secondary flex-grow-1"
                        onClick={addGuest}
                    >
                        Add Guest
                    </button>
                    <button type="submit" className="btn btn-primary flex-grow-1">
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookRooms;
