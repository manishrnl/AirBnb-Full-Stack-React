import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
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
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoomsOfAHotel from "./pages/AllRoomsOfAHotel.jsx";
import SelectedRoomDetails from "./pages/SelectedRoomDetails";
import {BASE_URL} from "./service/UserService.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PremiumLoader from "./service/PremiumLoader.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
    const [isServerLoading, setIsServerLoading] = useState(true);
    const [isDone, setIsDone] = useState(false); // New state
    const isAuthenticated = !!localStorage.getItem("accessToken");

    useEffect(() => {
        const wakeUpServer = async () => {
            try {
                await axios.get(`${BASE_URL}/health`); // Hit any endpoint to wake up the server
                setIsDone(true); // Tell loader to hit 100%

                // Wait 800ms for the animation to finish
                setTimeout(() => {
                    setIsServerLoading(false);
                }, 800);
            } catch (error) {
                console.log(error);
                setIsServerLoading(false);
            }
        };
        wakeUpServer();
    }, []);

    if (isServerLoading) {
        return <PremiumLoader isDone={isDone}/>;
    }

    // 2. Once server is awake, render the normal application

    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}>
            <div className="d-flex flex-column min-vh-100">
                <Navbar/>
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/"
                               element={<Navigate to={isAuthenticated ? "/home" : "/login"}
                               replace/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/hotelDetails" element={<HotelDetails/>}/>
                        <Route path="/contact-us" element={<ContactUs/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/offers" element={<Offers/>}/>
                        <Route path="/about-us" element={<About/>}/>

                        <Route path="/bookings" element={
                            <ProtectedRoute> <BookRooms/> </ProtectedRoute>}/>

                        <Route path="/room/:roomId" element={
                            <ProtectedRoute> <SelectedRoomDetails/> </ProtectedRoute>}/>

                        <Route path="/bookings/details" element={<ProtectedRoute>
                            <Booking_Step_Two/></ProtectedRoute>}/>

                        <Route path="/bookings/details/payments" element={
                            <ProtectedRoute> <Payments/> </ProtectedRoute>}/>

                        <Route path="/myBookings" element={
                            <ProtectedRoute> <MyBookings/> </ProtectedRoute>}/>

                        <Route path="/hotel/:hotelId/rooms" element={<AllRoomsOfAHotel/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="/page-not-found" element={<PageNotFound/>}/>
                        <Route path="*" element={<Navigate to="/page-not-found" replace/>}/>
                    </Routes>
                </main>
                <Footer/>
                <ToastContainer position="top-right" autoClose={3000}/>
            </div>
        </BrowserRouter>
    );
}

export default App;