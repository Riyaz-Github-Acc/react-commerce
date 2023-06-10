import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h3>Useful Links</h3>
            <span>Home</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>

          <div className="item">
            <h3>Shopping</h3>
            <span>Shop</span>
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
          </div>

          <div className="item">
            <h3>Quick Links</h3>
            <span>My Account</span>
            <span>Wishlist</span>
            <span>Cart</span>
          </div>

          <div className="item">
            <h3>Policy Links</h3>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Return Policy</span>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <div className="logo">
              <h3>React Commerce</h3>
            </div>
          </div>

          <div className="right">
            <div className="copyright">
              &#169; Copyright 2023. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
