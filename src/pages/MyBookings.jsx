import React, {Component, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Helper wrapper to pass navigate function to class component
export function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

class MyBooking extends Component {
    componentDidMount() {
        document.title = "My Bookings - Hotel Booking";
    }
    constructor(props) {
        super(props);
        this.state = {
            bookings: [
                {
                    id: 1,
                    images:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.FtudhIBH-HYhxMpS4TU-sAHaE8%3Fpid%3DApi&f=1&ipt=d98f3f59017d8a2041e0f12cbf43fc4ce6a09e4fbcbe96052651f45ec4f3736a&ipo=images",
                    roomName: "Deluxe Room",
                    price: "$120/night",
                    checkInDate: "2025-10-20",
                   checkOutDate: "2025-10-21"
                },
                {
                    id: 2,
                    images:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MInViflWTn0CIsOU3esbLwHaE5%3Fpid%3DApi&f=1&ipt=28e4f7b0e5e24df18293f2e9bc2208da8582f68b4c392a6297cb010bd860ac23&ipo=images",
                    roomName: "Standard Room",
                    price: "$80/night",
                    checkInDate: "2025-10-20",
                    checkOutDate: "2025-10-21"
                },
                {
                    id: 3,
                    images:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MInViflWTn0CIsOU3esbLwHaE5%3Fpid%3DApi&f=1&ipt=28e4f7b0e5e24df18293f2e9bc2208da8582f68b4c392a6297cb010bd860ac23&ipo=images",
                    roomName: "Suite",
                    price: "$200/night",
                    checkInDate: "2025-10-20",
                    checkOutDate: "2025-10-21"
                }
            ]
        };
    }

    handleDelete = (id) => {
        const updatedBookings = this.state.bookings.filter(b => b.id !== id);
        this.setState({ bookings: updatedBookings });
    };

    handleUpdate = (id) => {
        const booking = this.state.bookings.find(b => b.id === id);
        alert(`Update booking: ${booking.roomName} on ${booking.date}`);
    };

    handleAddMore = () => {
        // For demo: navigate to booking page with dummy data
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const formatDate = (date) => date.toISOString().split("T")[0];

        const booking = {
            roomsCount: 1,
            checkInDate: formatDate(today),
            checkOutDate: formatDate(tomorrow),
            guests: [{ name: "", gender: "", age: "" }],
            bookingStatus: "PENDING",
        };

        this.props.navigate("/bookings", { state: { booking } });
    };

    render() {


        const { bookings } = this.state;

        return (
            <div className="mybooking-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4 text-primary">My Bookings</h2>
                    <div className="text-center mb-4">
                        <button
                            className="btn btn-success"
                            onClick={this.handleAddMore}
                        >
                            Add More Booking
                        </button>
                    </div>

                    {bookings.length === 0 ? (
                        <p className="text-center">No bookings found</p>
                    ) : (
                        <div className="row">
                            {bookings.map((booking) => (
                                <div key={booking.id} className="col-md-4 mb-4">
                                    <div className="card shadow-sm h-100">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{booking.roomName}</h5>
                                            <img
                                                src={booking.images}
                                                alt={booking.roomName}
                                                className="card-img-top"
                                                style={{
                                                    height: "200px",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                    borderTopLeftRadius: "0.5rem",
                                                    borderTopRightRadius: "0.5rem",
                                                }}
                                            />

                                            <p className="card-text">Price: {booking.price}</p>
                                            <p className="card-text">Check In Date: {booking.checkInDate}</p>
                                            <p className="card-text">Check Out Date: {booking.checkOutDate}</p>
                                            <div className="d-flex justify-content-center gap-2 mt-3">
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => this.handleUpdate(booking.id)}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => this.handleDelete(booking.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

// Wrap class component to use navigate
export default withNavigation(MyBooking);
