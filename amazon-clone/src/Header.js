import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <Link to={!user && "/login"} className="headerLink">
          <div onClick={login} className="headerOption">
            <span className="headerOptionLine1">Hello, {user?.email}</span>
            <span className="headerOptionLine2">
              {!user ? "Sign in" : "Sign Out"}
            </span>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLine1">Returns</span>
            <span className="headerOptionLine2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLine1">Your</span>
            <span className="headerOptionLine2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="headerLink">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionLine2 headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/*basket icon link w/ number */}
    </nav>
  );
}

export default Header;
