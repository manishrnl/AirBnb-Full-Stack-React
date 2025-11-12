import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard.jsx";

const CardContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Local room data (20 rooms)
    const localRooms = [
        { id: 1, city: "Mumbai", type: "Deluxe Suite", basePrice: 9000, amenities: ["WiFi", "Pool", "TV", "Air Conditioning"], photos: ["https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg"] },
        { id: 2, city: "Delhi", type: "Standard Room", basePrice: 5000, amenities: ["WiFi", "TV"], photos: ["https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg"] },
        { id: 3, city: "Goa", type: "Beach Villa", basePrice: 15000, amenities: ["WiFi", "Pool", "Kitchen", "Sea View"], photos: ["https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg"] },
        { id: 4, city: "Jaipur", type: "Heritage Room", basePrice: 7000, amenities: ["WiFi", "Breakfast Included"], photos: ["https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg"] },


        { id: 5, city: "Bangalore", type: "Executive Room", basePrice: 8000, amenities: ["WiFi", "Gym", "Mini Bar"], photos: ["https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg"] },
        { id: 6, city: "Kolkata", type: "Classic Room", basePrice: 6000, amenities: ["WiFi", "TV"], photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQNBPzmjAot00LKAYjkHxPUwkREwl4IiE2pQ5c0mYLRkVQ8ggzChAuq45Fwok1zrNzMpJfQ&s"] },
        { id: 7, city: "Chennai", type: "Luxury Suite", basePrice: 12000, amenities: ["WiFi", "Pool", "Jacuzzi"], photos: ["https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"] },
        { id: 8, city: "Pune", type: "Business Room", basePrice: 7500, amenities: ["WiFi", "Desk", "Coffee Maker"], photos: ["https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg"] },
        { id: 9, city: "Hyderabad", type: "Royal Suite", basePrice: 14000, amenities: ["WiFi", "Pool", "TV", "Breakfast"], photos: ["https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg"] },
        { id: 10, city: "Ahmedabad", type: "Standard Room", basePrice: 5500, amenities: ["WiFi", "TV"], photos: ["https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"] },
        { id: 11, city: "Manali", type: "Mountain View Cabin", basePrice: 13000, amenities: ["WiFi", "Fireplace", "Balcony"], photos: ["https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg"] },
        { id: 12, city: "Shimla", type: "Cozy Cottage", basePrice: 9500, amenities: ["WiFi", "Heater", "TV"], photos: ["https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"] },
        { id: 13, city: "Udaipur", type: "Lake View Room", basePrice: 11000, amenities: ["WiFi", "Pool", "Breakfast"], photos: ["https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg"] },
        { id: 14, city: "Rishikesh", type: "River View Suite", basePrice: 10000, amenities: ["WiFi", "Yoga Area"], photos: ["https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg"] },




        { id: 15, city: "Leh", type: "Adventure Cabin", basePrice: 8500, amenities: ["WiFi", "Heater"], photos: ["https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"] },
        { id: 16, city: "Darjeeling", type: "Tea Estate Stay", basePrice: 9000, amenities: ["WiFi", "Balcony"], photos: ["https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg"] },
        { id: 17, city: "Varanasi", type: "Spiritual Retreat", basePrice: 8000, amenities: ["WiFi", "Breakfast"], photos: ["https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg"] },
        { id: 18, city: "Ooty", type: "Hillside Cottage", basePrice: 9500, amenities: ["WiFi", "Garden View"], photos: ["https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg"] },
        { id: 19, city: "Mysore", type: "Palace Room", basePrice: 10000, amenities: ["WiFi", "TV", "Breakfast"], photos: ["https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg"] },
        { id: 20, city: "Nainital", type: "Lake Cabin", basePrice: 10500, amenities: ["WiFi", "Lake View"], photos: ["https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg"] },
    ];

    useEffect(() => {
        // simulate data loading
        setTimeout(() => {
            setRooms(localRooms);
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <p className="text-center py-5">Loading rooms...</p>;

    return (
        <div className="container py-5" id="rooms">
            <div>
                <h2 className="text-center mb-5">Our Rooms</h2>
            </div>

            <div className="row g-4">
                {rooms.map((room) => (
                    <div key={room.id} className="col-md-6 col-lg-3">
                        <SingleCard
                            image={room.photos[0]}
                            city={room.city}
                            type={room.type}
                            amenities={room.amenities.join(", ")}
                            price={`Price: ₹${room.basePrice}`}
                            buttonText="Book Now"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContainer;


//
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SingleCard from "./SingleCard.jsx";
//
//
// const CardContainer = () => {
//     const [rooms, setRooms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [sortOption, setSortOption] = useState("");
//     const [price, setPrice] = useState(10000); // slider value (max price)
//
//     const fetchRooms = async (sortBy, maxPrice) => {
//         try {
//             const response = await axios.post(
//                 `${BASE_URL}/api/v1/admin/hotels/1/rooms/search`,
//                 {
//                     sortBy: sortBy || null,
//                     maxPrice: maxPrice || null,
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     withCredentials: true,
//                 }
//             );
//             console.log("Response:", response.data);
//             setRooms(response.data.content || []);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching rooms:", error);
//             setError("Failed to load rooms");
//             setLoading(false);
//         }
//     };
//
//
//     useEffect(() => {
//         setLoading(true);
//         fetchRooms(sortOption, price);
//     }, [sortOption, price]);
//
//     const handleSortChange = (e) => {
//         setSortOption(e.target.value);
//     };
//
//     const handlePriceChange = (e) => {
//         setPrice(e.target.value);
//     };
//
//     if (loading) return <p className="text-center py-5">Loading rooms...</p>;
//     if (error) return <p className="text-center py-5 text-danger">{error}</p>;
//
//     return (
//         <div className="container py-5" id="rooms">
//             <div>
//                 <h2 className="text-center mb-5">Our Rooms</h2>
//             </div>
//
//             {/* Sort & Price Filter Section */}
//             <div className="flex flex-wrap items-center gap-6 mb-5 justify-center">
//                 <div>
//                     <p>Sort Room By:</p>
//                     <select
//                         className="border border-gray-300 rounded-md p-2"
//                         value={sortOption}
//                         onChange={handleSortChange}
//                     >
//                         <option value="">Select</option>
//
//                         <option value="size">Size</option>
//                         <option value="availability">Availability</option>
//                     </select>
//                 </div>
//
//                 <div className="flex flex-col items-start">
//                     <p>Filter by Price: ₹{price}</p>
//                     <input
//                         type="range"
//                         min="500"
//                         max="20000"
//                         step="500"
//                         value={price}
//                         onChange={handlePriceChange}
//                         className="w-64 accent-blue-600"
//                     />
//                 </div>
//             </div>
//
//             {/* Room Cards */}
//             {rooms.length === 0 ? (
//                 <p className="text-center">No rooms available</p>
//             ) : (
//                 <div className="row g-4">
//                     {rooms.map((room) => (
//                         <div key={room.id} className="col-md-6 col-lg-3">
//                             <SingleCard
//                                 image={room.photos[0]}
//                                 city={room.city}
//                                 type={room.type}
//                                 amenities={room.amenities.join(" , ")}
//                                 price={`Price: ₹${room.basePrice}`}
//                                 buttonText="Book Now"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default CardContainer;
