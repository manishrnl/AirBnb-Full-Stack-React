import React, { useState } from "react";

const SingleCard = ({ photos = [], city, type, amenities, price, buttonText, onButtonClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fallback if photos array is empty or null
    const displayPhotos = photos && photos.length > 0 
        ? photos 
        : ["https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=300&auto=format&fit=crop"];

    const nextSlide = (e) => {
        e.stopPropagation(); // Prevents the card's onButtonClick from firing
        setCurrentIndex((prev) => (prev === displayPhotos.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation(); // Prevents the card's onButtonClick from firing
        setCurrentIndex((prev) => (prev === 0 ? displayPhotos.length - 1 : prev - 1));
    };

    return (
        <div className="card h-100 shadow-sm border-0 overflow-hidden" style={{ borderRadius: "15px" }}>
            {/* Image Slider Section */}
            <div className="position-relative" style={{ height: "220px", cursor: "pointer" }}>
                <img 
                    src={displayPhotos[currentIndex]} 
                    className="card-img-top w-100 h-100" 
                    alt={type} 
                    style={{ objectFit: "cover", transition: "all 0.4s ease" }} 
                />
                
                {/* Navigation Arrows - Only show if there's more than 1 photo */}
                {displayPhotos.length > 1 && (
                    <>
                        <button 
                            onClick={prevSlide}
                            className="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y ms-2 opacity-75 border-0"
                            style={{ borderRadius: "50%", width: "28px", height: "28px", zIndex: 2 }}
                        >
                            ❮
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y me-2 opacity-75 border-0"
                            style={{ borderRadius: "50%", width: "28px", height: "28px", zIndex: 2 }}
                        >
                            ❯
                        </button>

                        {/* Pagination Dots */}
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-1">
                            {displayPhotos.map((_, idx) => (
                                <div 
                                    key={idx}
                                    className={`rounded-circle ${idx === currentIndex ? 'bg-white' : 'bg-light opacity-50'}`}
                                    style={{ width: "6px", height: "6px" }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Card Content */}
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="card-title mb-0 fw-bold">{type} in {city}</h6>
                    <span className="badge bg-light text-dark border">★ {Math.random().toFixed(1) * 1 + 4}</span>
                </div>
                
                <p className="card-text text-muted small mb-3 text-truncate">
                    {amenities || "Wi-Fi, AC, Kitchen, Parking"}
                </p>
                
                <div className="mt-auto">
                    <p className="mb-2"><span className="fw-bold fs-5">{price}</span> <small className="text-muted">/ night</small></p>
                    <button 
                        onClick={onButtonClick} 
                        className="btn btn-primary w-100 fw-semibold"
                        style={{ borderRadius: "8px" }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;