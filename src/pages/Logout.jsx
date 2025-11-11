import React, {useEffect} from "react";

const Logout = ({ show, onConfirm, onCancel }) => {

    useEffect(() => {
        document.title = "Logout - Hotel Booking";
    }, []); // Empty dependency array means it runs once on mount

    if (!show) return null; // Hide popup when not triggered

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
        >
            <div className="card p-4 shadow-lg text-center" style={{ width: "350px", borderRadius: "15px" }}>
                <h4 className="mb-3 text-danger">Confirm Logout</h4>
                <p className="mb-4">Are you sure you want to log out?</p>
                <div className="d-flex justify-content-around">
                    <button className="btn btn-danger px-4" onClick={onConfirm}>
                        Yes, Logout
                    </button>
                    <button className="btn btn-secondary px-4" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
