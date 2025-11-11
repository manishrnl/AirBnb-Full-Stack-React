// src/pages/About.jsx
import React, {useEffect} from "react";
import aboutImage from "../assets/hotel-about.jpg"

const About = () => {
    useEffect(() => {
        document.title = "About Us - Hotel Booking";
    }, []); // Empty dependency array means it runs once on mount

    return (
        <div className="container py-5">
            <h2 className="text-center mb-5 text-primary">About Our Hotel</h2>

            <div className="row align-items-center">
                {/* Left side: Image */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                        src={aboutImage}
                        alt="Hotel"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Right side: Text */}
                <div className="col-lg-6">
                    <h3 className="mb-3">Welcome to Our Luxury Hotel</h3>
                    <p className="mb-3">
                        Our hotel offers the perfect blend of comfort, luxury, and
                        personalized service. Whether you’re traveling for business or
                        leisure, our rooms are designed to make your stay unforgettable.
                    </p>
                    <p className="mb-3">
                        Enjoy modern amenities, gourmet dining, and a wide range of
                        recreational facilities. We are committed to making every guest’s
                        experience exceptional.
                    </p>
                    <ul className="list-unstyled mb-3">
                        <li>✔ Free Wi-Fi in all rooms</li>
                        <li>✔ 24/7 Room Service & Concierge</li>
                        <li>✔ Swimming Pool & Spa</li>
                        <li>✔ Family & Pet Friendly Rooms</li>
                    </ul>
                    <a href="/" className="btn btn-primary">
                        Explore Rooms
                    </a>
                </div>
            </div>

            {/* Optional: Mission Statement */}
            <div className="row mt-5 text-center">
                <div className="col-md-4 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <h5>Our Mission</h5>
                        <p>
                            To provide luxury hospitality with exceptional service
                            and a comfortable environment for all guests.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <h5>Our Vision</h5>
                        <p>
                            To be recognized as the leading hotel for comfort,
                            elegance, and guest satisfaction.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <h5>Our Values</h5>
                        <p>
                            Excellence, Integrity, Hospitality, and Customer
                            Satisfaction are at the heart of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
