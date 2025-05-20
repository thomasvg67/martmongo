import React from 'react'

const GetInTouch = () => {
    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="titie-section wow fadeInDown animated">
                                <h1>GET IN TOUCH</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft animated">
                            <div className="left-content">
                                <h1>Do<span>k</span>an</h1>
                                <h3>We'd love To Meet You In Person Or Via The Web!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel nulla sapien. Class
                                    aptent tacitiaptent taciti sociosqu ad lit himenaeos. Suspendisse massa urna, luctus ut
                                    vestibulum necs et, vulputate quis urna. Donec at commodo erat.
                                </p>
                                <div className="contact-info">
                                    <p><b>Main Office:</b> 123 Elm St. New York City, NY</p>
                                    <p><b>Phone:</b> 1.555.555.5555</p>
                                    <p><b>Email:</b> info@yourdomain.com</p>
                                </div>
                                <div className="social-media">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight animated">
                            <form action="" method="" className="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="url" className="form-control" id="website" placeholder="Website URL" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <textarea className="form-control" cols="30" rows="5" placeholder="Your Message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <input type="submit" className="contact-submit" value="Send" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetInTouch
