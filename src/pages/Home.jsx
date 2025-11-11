import React, { useEffect, useRef } from "react";
import CardContainer from "../components/CardContainer.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const heroRef = useRef(null);
    const roomRef = useRef(null);

    useEffect(() => {
        document.title = "Home - Hotel Booking";
    }, []);

    useEffect(() => {
        const hash = location.hash;
        if (hash === "#room-section" && roomRef.current) {
            roomRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "#hero-section" && heroRef.current) {
            heroRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const navigateToRooms = () => {
        navigateTo("/#room-section");
    };

    return (
        <div>
            {/* Hero Section */}
            <section
                id="hero-section"
                ref={heroRef}
                className="hero-section text-center d-flex align-items-center justify-content-center position-relative"
                style={{
                    backgroundImage:
                        'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.D_QfonV7GA5Yv8tR2Qu9YAHaFb%3Fpid%3DApi&f=1&ipt=0d21464b9b20d608a5f155251fd8e250ebc11631fb0589dc3660593934b1d4e5&ipo=images")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh",
                    color: "white",
                    overflow: "hidden",
                }}
            >
                {/* Dark overlay (with opacity) */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1,
                    }}
                ></div>

                {/* Text content */}
                <div className="container position-relative z-2">
                    <h1
                        className="display-4 fw-bold text-white  px-3 py-2 rounded"

                    >
                        Welcome to Hotel Booking
                    </h1>
                    <p
                        className="lead mb-4 text-white  px-3 py-1 rounded mt-3"

                    >
                        Luxury stays. Best prices. Instant booking.
                    </p>
                    <div className="mt-4">
                        <button
                            onClick={navigateToRooms}
                            className="btn btn-primary btn-lg"
                            style={{ zIndex: 2, position: "relative" }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section id="room-section" ref={roomRef} className="room-section">

                <CardContainer />
            </section>
        </div>
    );
};

export default Home;
