import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/FeatProducts';
import Collection from '../components/Collection';
import Service from '../components/Service';
import Offers from '../components/Offers';
import BestSellers from '../components/BestSellers';
import Review from '../components/Review';
import Partner from '../components/Partner';
import GetInTouch from '../components/GetInTouch';
import News from '../components/News';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="slider-section">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators slider-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="/assets/images/slider.jpg" width="1648" height="600" alt="Slider" />
              <div className="carousel-caption">
                <h2>DRESSES <b>&</b> JEANS</h2>
                <h3>FROM OUR FAMOUS BRANDS <span>SALE</span></h3>
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div className="item">
              <img src="/assets/images/slider.jpg" width="1648" height="600" alt="Slider" />
              <div className="carousel-caption">
                <h2>DRESSES <b>&</b> JEANS</h2>
                <h3>FROM OUR FAMOUS BRANDS <span>SALE</span></h3>
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div className="item">
              <img src="/assets/images/slider.jpg" width="1648" height="600" alt="Slider" />
              <div className="carousel-caption">
                <h2>DRESSES <b>&</b> JEANS</h2>
                <h3>FROM OUR FAMOUS BRANDS <span>SALE</span></h3>
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="pe-7s-angle-left glyphicon-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="pe-7s-angle-right glyphicon-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>
      <Service />
      <Collection />
      <Products />
      <Offers />
      <BestSellers />
      <Review />
      <NewsLetter />
      {/* <Partner /> */}
      <News />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
