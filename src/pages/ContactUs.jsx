// src/pages/ContactUs.jsx
import React, {useEffect, useState} from "react";

const ContactUs = () => {

    useEffect(() => {
        document.title = "Contact Us - Hotel Booking";
        // Scroll to top when page loads
        window.scrollTo({top: 0, behavior: "smooth"});

    }, []);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission (no backend yet)
        console.log("Form submitted:", formData);
        setSuccessMessage("Thank you! We will get back to you soon.");
        setFormData({name: "", email: "", subject: "", message: ""});
    };


    return (
        <div className="container py-5">
            <h2 className="text-center mb-5 text-primary">Contact Us</h2>

            <div className="row">
                {/* Contact Info */}
                <div className="col-lg-5 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <h5>Get in Touch</h5>
                        <p>We’d love to hear from you! Reach out with any questions, bookings,
                            or feedback.</p>
                        <ul className="list-unstyled">
                            <li>📍 Address: Madhubani Bihar , India</li>
                            <li>📞 Phone: +1 9877 370 875</li>
                            <li>✉ Email: manishrajrnl@zohomail.in</li>
                            <li className="a">
                                🌐 Website: <a href="https://manishrnl.netlify.app/"
                                              target="_blank" rel="noopener noreferrer">
                                Navigate to My Website
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-7">
                    <div className="p-4 border rounded shadow-sm">
                        {successMessage && (
                            <div className="alert alert-success">{successMessage}</div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="row mt-5">
                <div className="col-12">
                    <div className="border rounded shadow-sm" style={{height: '300px'}}>
                        <iframe
                            src="https://embed.mappls.com/place/CTD6RR?token=przotensqvzqyvqdoxuclfnuednuvkywfxmi&fullscreen=true&position=top-left&zoom=16&pitch=45"
                            style={{width: '100%', height: '100%', border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mappls Map of Madhuai, Bihar"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
