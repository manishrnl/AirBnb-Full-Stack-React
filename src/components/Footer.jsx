import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">

                    {/* About */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Hotel Booking
                        </h5>
                        <p>
                            Experience luxury and comfort. Book your perfect stay with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Quick Links
                        </h5>
                        <p>
                            <Link to="/#hero-section" className="text-white text-decoration-none">
                                Home
                            </Link>
                        </p>
                        <p>
                            <Link to="/#room-section" className="text-white text-decoration-none">
                                Rooms
                            </Link>
                        </p>
                        <p>
                            <Link to="/services" className="text-white text-decoration-none">
                                Services
                            </Link>
                        </p>
                        <p>
                            <Link to="/contact-us" className="text-white text-decoration-none">
                                Contact Us
                            </Link>
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Contact
                        </h5>
                        <p><i className="fas fa-home me-3"></i> Madhubani, Bihar</p>
                        <p><i className="fas fa-envelope me-3"></i> manishrajrnl@zohomail.in</p>
                        <p><i className="fas fa-phone me-3"></i> +91 98773 70875</p>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Follow Us
                        </h5>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                alt="Facebook"
                                style={{ width: "24px", height: "24px" }}
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/manish.rnl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                alt="Instagram"
                                style={{ width: "24px", height: "24px" }}
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/manish-kumar-2846a8145"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                                alt="LinkedIn"
                                style={{ width: "24px", height: "24px" }}
                            />
                        </a>
                    </div>

                </div>

                <hr className="mb-4" />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>© 2025 AirBnb Clone. All rights reserved.</p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <p>Designed with ❤️ by Manish</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
