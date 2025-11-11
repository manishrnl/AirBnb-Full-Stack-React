// src/pages/Offers.jsx
import React, {useEffect} from "react";

const offersData = [
    {
        id: 1,
        title: "Summer Special",
        description: "Get 25% off on all luxury rooms during the summer season!",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 2,
        title: "Weekend Getaway",
        description: "Book a weekend stay and enjoy complimentary breakfast for two.",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 3,
        title: "Family Package",
        description: "Special discounts for family bookings with kids-friendly amenities.",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
];

const Offers = () => {

    useEffect(() => {
        document.title = "Offers & Coupons - Hotel Booking";
    }, []); // Empty dependency array means it runs once on mount


    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Current Offers</h2>
            <div className="row g-4">
                {offersData.map(offer => (
                    <div key={offer.id} className="col-md-6 col-lg-4">
                        <div className="card shadow-sm h-100">
                            <img src={offer.image} className="card-img-top" alt={offer.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{offer.title}</h5>
                                <p className="card-text flex-grow-1">{offer.description}</p>
                                <a href="#rooms" className="btn btn-primary mt-auto">Book Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offers;
