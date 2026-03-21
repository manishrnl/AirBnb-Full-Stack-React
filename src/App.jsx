import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Offers from "./pages/Offers.jsx";
import BookRooms from "./pages/BookRoms.jsx";
import Booking_Step_Two from "./pages/Booking_Step_Two.jsx";
import Payments from "./pages/Payments.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Logout from "./pages/Logout.jsx";
import HotelDetails from "./pages/LoadAllHotels.jsx"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoomsOfAHotel from "./pages/AllRoomsOfAHotel.jsx"; 
import SelectedRoomDetails from "./pages/SelectedRoomDetails";

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <div className="d-flex flex-column min-vh-100">
                <Navbar />

                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hotelDetails" element={<HotelDetails />}/>
                        <Route path="/about-us" element={<About />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/bookings" element={<BookRooms />} />
                        
                        {/* Fixed: Component name must match the import */}
                        <Route path="/hotel/:hotelId/rooms" element={<AllRoomsOfAHotel />} />
                        
                        <Route path="/room/:roomId" element={<SelectedRoomDetails />} />
                        <Route path="/bookings/details" element={<Booking_Step_Two />}/>
                        <Route path="/bookings/details/payments" element={<Payments />}/>
                        <Route path="/myBookings" element={<MyBookings />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>

                <Footer />
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </BrowserRouter>
    );
}

export default App;