import { Link } from "react-router-dom";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Cart from "./Cart";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/4">
              Women
            </Link>
          </div>
          <Link className="link" to="/products/3">
            Men
          </Link>
          <Link className="link" to="/products/5">
            Kids
          </Link>
          <Link className="link" to="/products/shop">
            Shop
          </Link>
        </div>

        <div className="center">
          <Link className="link" to="/">
            <h1>React Commerce</h1>
          </Link>
        </div>

        <div className="right">
          <Link className="link" to="/">
            About Us
          </Link>
          <Link className="link" to="/">
            Contact Us
          </Link>
          <Link className="link" to="/">
            Home
          </Link>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderIcon />

            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Header;
