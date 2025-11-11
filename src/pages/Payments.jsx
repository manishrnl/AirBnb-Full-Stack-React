// src/pages/Payments.jsx
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payments = () => {
    useEffect(() => {
        document.title = "Payments - Hotel Booking";
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const {booking} = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        name: "",
        upiId: "",
        netBankId: "",
    });

    if (!booking) {
        return (
            <div className="container my-5 text-center py-5">
                <h3 className="text-danger">No booking found.</h3>
                <button
                    className="btn btn-outline-primary mt-3"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>
            </div>
        );
    }

    const paymentImages = {
        creditCard: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.wVCCwbT5dbg7i2RiXkQDlwHaFe%3Fpid%3DApi&f=1&ipt=5c99ee00198396fa87e2e1fe5a2fd4a1b3be63c9b9e164b58694549e349e1882&ipo=images",
        upi: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.3KE2PSIXe2I8WYdkt4mixAHaFj%3Fpid%3DApi&f=1&ipt=bdc1299ea3083c8d042bc38763a96013d4444a0080900944da7064ceb77709e5&ipo=images",
        netbanking: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.3tJVjuw3Cc3IerRM1jmrvgHaE8%3Fpid%3DApi&f=1&ipt=c29154f47af1554468502f9a988849210c16d71352aa81569a4c16388cefc71a&ipo=images",
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPaymentData((prev) => ({...prev, [name]: value}));
    };

    const handlePayment = (e) => {
        e.preventDefault();
        console.log({paymentMethod, paymentData, booking});
        toast.success("Payment Successful! Booking Confirmed.");
        navigate("/users-details", {state: {booking}});
    };

    const verifyIds = () => {
        toast.success("Verified!");
    };

    const PaymentCard = ({method, label}) => (
        <div
            className={`card p-4 flex-fill shadow-sm ${
                paymentMethod === method ? "border border-3 border-primary" : ""
            }`}
            style={{
                cursor: "pointer",
                backgroundImage: `url(${paymentImages[method]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                textShadow: "1px 1px 3px rgba(255,255,255,0.7)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: paymentMethod === method ? "scale(1.05)" : "scale(1)",
                color: "black",
                fontWeight: "bold",
                fontSize: "1.1rem",
            }}
            onClick={() => setPaymentMethod(method)}
        >
            <span>{label}</span>
        </div>
    );

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-bold">Complete Your Payment</h2>

            {/* Booking Summary */}
            <div className="card shadow-lg mb-4 p-4 rounded-4 border-0">
                <h5 className="mb-3">Booking Summary</h5>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <strong>Hotel:</strong> {booking.hotel?.name || "N/A"}
                    </div>
                    <div className="col-md-6 mb-2">
                        <strong>Room:</strong> {booking.room?.title || "N/A"}
                    </div>
                    <div className="col-md-4 mb-2">
                        <strong>Check-In:</strong> {booking.checkInDate}
                    </div>
                    <div className="col-md-4 mb-2">
                        <strong>Check-Out:</strong> {booking.checkOutDate}
                    </div>
                    <div className="col-md-4 mb-2">
                        <strong>Rooms:</strong> {booking.roomsCount}
                    </div>
                    <div className="col-md-6 mb-2">
                        <strong>Guests:</strong> {booking.guests?.length}
                    </div>
                    <div className="col-md-6 mb-2">
                        <strong>Total Amount:</strong>{" "}
                        <span className="text-success fw-bold">₹{booking.amount}</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handlePayment}>
                <h5 className="mb-3">Select Payment Method</h5>
                <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                    <PaymentCard method="creditCard" label="Credit/Debit Card"/>
                    <PaymentCard method="upi" label="UPI"/>
                    <PaymentCard method="netbanking" label="Net Banking"/>
                </div>

                {/* Dynamic Payment Form */}
                <div className="card shadow-lg p-4 mb-4 rounded-4 border-0">
                    {paymentMethod === "creditCard" && (
                        <>
                            <h6 className="mb-3">Card Details</h6>
                            <div className="mb-3">
                                <label className="form-label">Card Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cardNumber"
                                    value={paymentData.cardNumber}
                                    onChange={(e) => {
                                        let val = e.target.value.replace(/\D/g, "").slice(0, 16);
                                        val = val.replace(/(\d{4})(?=\d)/g, "$1-");
                                        setPaymentData((prev) => ({...prev, cardNumber: val}));
                                    }}
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    required
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expiry</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="expiry"
                                        value={paymentData.expiry}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="cvv"
                                        value={paymentData.cvv}
                                        onChange={handleChange}
                                        placeholder="XXX"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Card Holder Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={paymentData.name}
                                    onChange={handleChange}
                                    placeholder="Name on Card"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {paymentMethod === "upi" && (
                        <>
                            <h6 className="mb-3">UPI Payment</h6>
                            <div className="mb-3">
                                <label className="form-label">UPI ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="upiId"
                                    value={paymentData.upiId}
                                    onChange={handleChange}
                                    placeholder="example@upi"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary mb-3"
                                onClick={verifyIds}
                            >
                                Verify
                            </button>
                        </>
                    )}

                    {paymentMethod === "netbanking" && (
                        <>
                            <h6 className="mb-3">Net Banking</h6>
                            <div className="mb-3">
                                <label className="form-label">Bank ID / Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="netBankId"
                                    value={paymentData.netBankId}
                                    onChange={handleChange}
                                    placeholder="Enter your Bank ID"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary mb-3"
                                onClick={verifyIds}
                            >
                                Verify
                            </button>
                        </>
                    )}
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success btn-lg px-5">
                        Pay ₹{booking.amount}
                    </button>
                </div>
            </form>

            {/* Only one ToastContainer needed */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Payments;