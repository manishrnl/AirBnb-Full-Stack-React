import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../pages/Logout.jsx";
import HotelIcons from "../assets/hotel-svg.jpg";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = () => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    const parsed = JSON.parse(storedUser);
                    if (parsed && parsed.name) setUser(parsed);
                } catch (err) {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        };
        loadUser();
        window.addEventListener("storage", loadUser);
        return () => window.removeEventListener("storage", loadUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setUser(null);
        setShowLogout(false);
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
                <div className="container-fluid px-md-5">

                    {/* 1. LEFT: LOGO */}
                    <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/home" style={{ flex: '1' }}>
                        <img
                            src={HotelIcons}
                            alt="Logo"
                            style={{ width: '32px', height: '32px', borderRadius: '4px' }}
                        />
                        <span className="text-danger d-none d-sm-inline">Airbnb Clone</span>
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 2. CENTER: LINKS */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarContent" style={{ flex: '2' }}>
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/offers">Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/contact-us">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/services">Services</Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3. RIGHT: ACCOUNT/LOGOUT */}
                    <div className="d-flex justify-content-end" style={{ flex: '1' }}>
                        <ul className="navbar-nav">
                            {user ? (
                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle btn btn-white border rounded-pill px-3 shadow-sm d-flex align-items-center gap-2"
                                        id="userDropdown"
                                        data-bs-toggle="dropdown"
                                        type="button"
                                    >
                                        <i className="bi bi-person-circle"></i>
                                        <span className="fw-bold">{user.name}</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                                        <li><Link className="dropdown-item" to="/myBookings">My Bookings</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <button className="dropdown-item text-danger" onClick={() => setShowLogout(true)}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle btn btn-white border rounded-pill px-3 shadow-sm"
                                        id="guestDropdown"
                                        data-bs-toggle="dropdown"
                                        type="button"
                                    >
                                        Account
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                                    </ul>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
            </nav>

            <Logout
                show={showLogout}
                onConfirm={handleLogout}
                onCancel={() => setShowLogout(false)}
            />
        </>
    );
};

export default Navbar;