import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert.jsx";

const Login = () => {
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState("");
    const [alertConfirmAction, setAlertConfirmAction] = useState(null);

    useEffect(() => {
        document.title = "Login - Hotel Booking";
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://airbnb-full-stack-spring-boot.onrender.com/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            const text = await response.text();

            if (response.ok) {
                // ✅ text is your token string
                const token = text.trim();

                // Store token and user email (for greeting)
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify({ name: email.split("@")[0], email }));

                // ✅ Trigger Navbar to update immediately
                window.dispatchEvent(new Event("storage"));

                setAlertMessage(`Welcome, ${email.split("@")[0]}!`);
                setAlertConfirmAction(() => () => navigate("/"));
            } else {
                const lowerText = text.toLowerCase();

                if (lowerText.includes("bad credentials") || lowerText.includes("invalid")) {
                    setAlertMessage("Invalid email or password. Please try again.");
                } else if (lowerText.includes("not found")) {
                    setAlertMessage("User not found. Please sign up first.");
                } else {
                    setAlertMessage(text || "Login failed. Please try again.");
                }

                setAlertConfirmAction(null);
            }
        } catch (error) {
            console.error("Login error:", error);
            setAlertMessage("An unexpected error occurred.");
            setAlertConfirmAction(null);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            {/* ✅ Custom Alert Popup */}
            <Alert
                message={alertMessage}
                onClose={() => setAlertMessage("")}
                onConfirm={() => {
                    if (alertConfirmAction) alertConfirmAction();
                    setAlertMessage("");
                }}
            />

            <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
                <h3 className="text-center mb-4 text-primary">Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
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
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
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
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Login
                    </button>
                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-primary">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
