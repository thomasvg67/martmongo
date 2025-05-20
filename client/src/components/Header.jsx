import React from 'react';

const Header = () => {
  return (
    <div>
      <section className="header-top-section">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="header-top-content">
                <ul className="nav nav-pills navbar-left">
                  <li>
                    <a href="#">
                      <i className="pe-7s-call"></i>
                      <span>123-123456789</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pe-7s-mail"></i>
                      <span> info@dokancom</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="header-top-menu">
                <ul className="nav nav-pills navbar-right">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li>
                    <a href="#">
                      <i className="pe-7s-lock"></i>Login/Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Header;
