import React from 'react';

const Collection = () => {
    return (
        <div>
            <section className="new-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titie-section wow fadeInDown animated">
                                <h1>NEW COLLECTION</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-3 col-sm-6 wow fadeInLeft animated"
                            data-wow-delay="0.2s"
                        >
                            <div className="product-item">
                                <img
                                    src="/assets/images/1.png"
                                    className="img-responsive"
                                    width="255"
                                    height="322"
                                    alt="Blue Tshirt"
                                />
                                <div className="product-hover">
                                    <div className="product-meta">
                                        <a href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-shuffle"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-clock"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-cart"></i>Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product-title">
                                    <a href="#">
                                        <h3>Blue Tshirt</h3>
                                        <span>$26</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-3 col-sm-6 wow fadeInLeft animated"
                            data-wow-delay="0.4s"
                        >
                            <div className="product-item">
                                <img
                                    src="/assets/images/2.png"
                                    className="img-responsive"
                                    width="255"
                                    height="322"
                                    alt="WOMAN shirt"
                                />
                                <div className="product-hover">
                                    <div className="product-meta">
                                        <a href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-shuffle"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-clock"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-cart"></i>Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product-title">
                                    <a href="#">
                                        <h3>WOMAN shirt</h3>
                                        <span>$31</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-3 col-sm-6 wow fadeInLeft animated"
                            data-wow-delay="0.6s"
                        >
                            <div className="product-item">
                                <img
                                    src="/assets/images/3.png"
                                    className="img-responsive"
                                    width="255"
                                    height="322"
                                    alt="YELLOW Tshirt"
                                />
                                <div className="product-hover">
                                    <div className="product-meta">
                                        <a href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-shuffle"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-clock"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-cart"></i>Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product-title">
                                    <a href="#">
                                        <h3>YELLOW Tshirt</h3>
                                        <span>$21</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-3 col-sm-6 wow fadeInLeft animated"
                            data-wow-delay="0.8s"
                        >
                            <div className="product-item">
                                <img
                                    src="/assets/images/4.png"
                                    className="img-responsive"
                                    width="255"
                                    height="322"
                                    alt="Cool lingerie"
                                />
                                <div className="product-hover">
                                    <div className="product-meta">
                                        <a href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-shuffle"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-clock"></i>
                                        </a>
                                        <a href="#">
                                            <i className="pe-7s-cart"></i>Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product-title">
                                    <a href="#">
                                        <h3>Cool lingerie</h3>
                                        <span>$56</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collection;
