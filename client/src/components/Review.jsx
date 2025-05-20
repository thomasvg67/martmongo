import React from 'react';

const Review = () => {
    return (
        <section className="review-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titie-section wow fadeInDown animated">
                            <h1>customer review</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="feedback" className="carousel slide feedback" data-ride="feedback">
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="assets/images/member1.png" width="320" height="439" alt="" />
                                <div className="carousel-caption">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
                                    <h3>- Olivia -</h3>
                                    <span>Melbour, Aus</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="assets/images/member2.png" width="320" height="439" alt="" />
                                <div className="carousel-caption">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
                                    <h3>- Olivia -</h3>
                                    <span>Melbour, Aus</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="assets//images/member3.png" width="320" height="439" alt="" />
                                <div className="carousel-caption">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
                                    <h3>- Olivia -</h3>
                                    <span>Melbour, Aus</span>
                                </div>
                            </div>
                        </div>
                        {/* Indicators */}
                        <ol className="carousel-indicators review-controlar">
                            <li data-target="#feedback" data-slide-to="0" className="active">
                                <img src="assets/images/member1.png" width="320" height="439" alt="" />
                            </li>
                            <li data-target="#feedback" data-slide-to="1">
                                <img src="assets//images/member2.png" width="320" height="439" alt="" />
                            </li>
                            <li data-target="#feedback" data-slide-to="2">
                                <img src="assets//images/member3.png" width="320" height="439" alt="" />
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
