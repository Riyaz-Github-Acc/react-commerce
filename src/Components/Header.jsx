import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ShoppingCartOutlined, MenuOpenOutlined } from "@mui/icons-material";

import Cart from "./Cart";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link className="link" to="/">
            <h1>React Commerce</h1>
          </Link>
        </div>

        <div className="right">
          <nav>
            <div className={`${!isOpen ? "nav-links hide" : "nav-links"}`}>
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/products/4">
                Women
              </Link>
              <Link className="link" to="/products/3">
                Men
              </Link>
              <Link className="link" to="/products/5">
                Kids
              </Link>
            </div>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
              <MenuOpenOutlined />
            </div>
          </nav>

          <div className="icons">
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlined />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Header;
