import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer.jsx"
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
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div>
            <Router>

                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/bookings" element={<BookRooms/>}/>
                    <Route path="/bookings/details" element={<Booking_Step_Two/>}/>
                    <Route path="/bookings/details/payments" element={<Payments/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/offers" element={<Offers/>}/>

                    <Route path="/myBookings" element={<MyBookings/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )

}

export default App;
