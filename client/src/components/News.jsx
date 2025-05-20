import React from 'react'

const News = () => {
    return (
        <div>
            <section className="news-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="titie-section wow fadeInDown animated">
                                <h1>Latest News</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 wow fadeInDown animated" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <a href="#">
                                    <img src="/assets/images/blog1.jpg" width="350" height="262" alt="Blog 1" />
                                </a>
                                <h3>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean </h3>
                                <p>
                                    Nam nec tellus a odio tincidunt auc. Duis sed odio sit amet nibh vulputate cursus a sit
                                    amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInDown animated" data-wow-delay="0.4s">
                            <div className="blog-item">
                                <a href="#">
                                    <img src="/assets/images/blog2.jpg" width="350" height="262" alt="Blog 2" />
                                </a>
                                <h3>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean </h3>
                                <p>
                                    Nam nec tellus a odio tincidunt auc. Duis sed odio sit amet nibh vulputate cursus a sit
                                    amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInDown animated" data-wow-delay="0.6s">
                            <div className="blog-item">
                                <a href="#">
                                    <img src="/assets/images/blog3.jpg" width="350" height="262" alt="Blog 3" />
                                </a>
                                <h3>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean </h3>
                                <p>
                                    Nam nec tellus a odio tincidunt auc. Duis sed odio sit amet nibh vulputate cursus a sit
                                    amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News
