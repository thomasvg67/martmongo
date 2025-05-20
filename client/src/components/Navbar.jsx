import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <header className="header-section">
        <nav className="navbar navbar-default">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><b>M</b>art</a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={currentPath === '/' ? 'active' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li className={currentPath === '/about' ? 'active' : ''}>
                  <Link to="/about">About Us</Link>
                </li>
                <li className={currentPath === '/product' ? 'active' : ''}>
                  <Link to="/product">Products</Link>
                </li>
                <li className={currentPath === '/shop' ? 'active' : ''}>
                  <Link to="/shop">Shop</Link>
                </li>
                <li className={currentPath === '/blog' ? 'active' : ''}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className={currentPath === '/contact' ? 'active' : ''}>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right cart-menu">
                <li>
                  <Link to="/search" className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <span>Cart - $0&nbsp;</span>
                    <span className="shoping-cart">0</span>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>

      <section className="search-section">
        <div className="container">
          <div className="row subscribe-from">
            <div className="col-md-12">
              <form className="form-inline col-md-12 wow fadeInDown animated">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control subscribe"
                    id="email"
                    placeholder="Search..."
                  />
                  <button className="suscribe-btn"><i className="pe-7s-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
