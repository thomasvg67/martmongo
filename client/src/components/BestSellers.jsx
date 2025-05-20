import React from 'react';

const BestSellers = () => {
    return (
        <div>
            <section className="best-seller-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titie-section wow fadeInDown animated">
                                <h1>BEST SELLERS</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {[1, 2, 3, 4].map((num, index) => {
                            const titles = ['Blue Tshirt', 'WOMAN shirt', 'YELLOW Tshirt', 'Cool lingerie'];
                            const prices = ['$26', '$31', '$21', '$56'];
                            const imagePath = `/assets/images/${num}.png`;
                            const delay = 0.2 + index * 0.2;

                            return (
                                <div
                                    className="col-md-3 col-sm-6 wow fadeInDown animated"
                                    data-wow-delay={`${delay}s`}
                                    key={num}
                                >
                                    <div className="product-item">
                                        <img
                                            src={imagePath}
                                            className="img-responsive"
                                            width="255"
                                            height="322"
                                            alt=""
                                        />
                                        <div className="product-hover">
                                            <div className="product-meta">
                                                <a href="#"><i className="pe-7s-like"></i></a>
                                                <a href="#"><i className="pe-7s-shuffle"></i></a>
                                                <a href="#"><i className="pe-7s-clock"></i></a>
                                                <a href="#"><i className="pe-7s-cart"></i>Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="product-title">
                                            <a href="#">
                                                <h3>{titles[index]}</h3>
                                                <span>{prices[index]}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestSellers;
