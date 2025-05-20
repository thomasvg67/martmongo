import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <section className="news-letter-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="titie-section white wow fadeInDown animated">
                                <h1>NEWSLETTER</h1>
                            </div>
                            <p>Follow a collection of news & promotions</p>
                        </div>
                    </div>
                    <div className="row subscribe-from">
                        <form className="form-inline col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1 wow fadeInDown animated">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control subscribe"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                                <button className="suscribe-btn">
                                    <i className="pe-7s-next"></i>
                                </button>
                            </div>
                        </form>{/* end /. form */}
                    </div>{/* end of/. row */}
                </div>{/* end of /.container */}
            </section>{/* end of /.news letter section */}
        </div>
    );
};

export default NewsLetter;
