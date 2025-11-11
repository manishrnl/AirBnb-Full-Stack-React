import React, {Component} from 'react';


class Services extends Component {
    componentDidMount() {
        document.title = "Services We Offers - Hotel Booking";
        // Scroll to top when page loads
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <div className="services-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Services</h2>
                    <div className="row">
                        {/* Service 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card text-center h-100 shadow-sm">
                                <div className="card-body">
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Gkl3w63b-qzrPPE1FW1w9AHaEK%3Fpid%3DApi&f=1&ipt=c5186d13aef8c1000bbe55ee538ec20a0b2c469017e0eb0e15c2850f7699581f&ipo=images"
                                        alt="Service 1"
                                        className="mb-3"
                                        style={{width: "350px", height: "200px"}}
                                    />
                                    <h5 className="card-title">Web Development</h5>
                                    <p className="card-text">We build responsive and modern
                                        websites tailored to your needs.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card text-center h-100 shadow-sm">
                                <div className="card-body">
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.Ib3Iam_48ukF2sEXgUqamgHaD8%3Fpid%3DApi&f=1&ipt=5de7d7db5fbe34449c8426401067eea24306935a0ae768658750bcfac7d5e206&ipo=images"
                                        alt="Service 2"
                                        className="mb-3"
                                        style={{width: "350px", height: "200px"}}
                                    />
                                    <h5 className="card-title">Desktop App Development</h5>
                                    <p className="card-text">Custom desktop apps for Windows
                                        platforms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card text-center h-100 shadow-sm">
                                <div className="card-body">
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%2Fid%2FOIP.mNHqbdFsuucdQHfTdN8KNAHaEK%3Fpid%3DApi&f=1&ipt=23143596b6481f45d0c3c161acacf14725700f1e439de5a2f7e068650c4204bb&ipo=images"
                                        alt="Service 3"
                                        className="mb-3"
                                        style={{width: "350px", height: "200px"}}
                                    />
                                    <h5 className="card-title">Digital Marketing</h5>
                                    <p className="card-text">SEO, social media, and marketing
                                        strategies to grow your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
