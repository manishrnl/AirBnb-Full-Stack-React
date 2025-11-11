import React from "react";
import {Link} from "react-router-dom";

const SingleCard = ({image, amenities, type, city, price, buttonText}) => {

        return (
            <div className="card shadow-sm h-100">
                <img
                    src={image}
                    alt={type}
                    className="card-img-top"
                    style={{
                        height: "200px",        // fixed height
                        width: "100%",          // full card width
                        objectFit: "cover",     // keeps aspect ratio, crops overflow
                        borderTopLeftRadius: "0.25rem",
                        borderTopRightRadius: "0.25rem"
                    }}
                />
                <div className="card-body d-flex flex-column">
                    <pre className="card-title">Type: {type}   City : {city}</pre>
                    <pre className="card-text flex-grow-1">Facilities : {amenities}</pre>
                    <p className="card-text flex-grow-1">{price}</p>
                    <Link to="/bookings"
                          className="btn btn-outline-primary mt-auto">{buttonText}</Link>
                </div>
            </div>
        )
            ;
    }
;
export default SingleCard;