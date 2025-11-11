import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert.jsx";

const Signup = () => {
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState("");
    const [alertConfirmAction, setAlertConfirmAction] = useState(null);

    useEffect(() => {
        document.title = "Sign Up - Hotel Booking";
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://airbnb-full-stack-5qqf.onrender.com/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
                credentials: "include",
            });

            const text = await response.text();
            let data;

            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }

            const errorMessage =
                data?.error?.message || "Signup failed. Please try again.";

            if (response.ok) {
                setAlertMessage("Signup successful! Please login.");
                setAlertConfirmAction(() => () => navigate("/login"));
            } else if (errorMessage.includes("already exists")) {
                setAlertMessage(
                    `User with email ${email} already exists. Please login to continue.`
                );
                setAlertConfirmAction(() => () => navigate("/login"));
            } else {
                setAlertMessage(errorMessage);
                setAlertConfirmAction(null);
            }
        } catch (error) {
            console.error("Signup error:", error);
            setAlertMessage("An unexpected error occurred.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            {/* ✅ Alert Popup */}
            <Alert
                message={alertMessage}
                onClose={() => setAlertMessage("")}
                onConfirm={() => {
                    if (alertConfirmAction) alertConfirmAction();
                    setAlertMessage("");
                }}
            />

            <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
                <h3 className="text-center mb-4 text-success">Sign Up</h3>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-3">
                        Sign Up
                    </button>
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-success">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
