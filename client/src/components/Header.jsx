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
                  <li><a href="/admin/addProducts">My Account</a></li>
                  <li><a href="/wishlist">Wishlist</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li><a href="/admin">Checkout</a></li>
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
