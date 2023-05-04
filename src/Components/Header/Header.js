import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/logo-apni_dukaan.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option__top">Hello {(user) ? user?.email.split('@')[0] : "Guest"}</span>
            <span className="header__option__bottom">{user? "Sign Out": "Sign In"}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__option__top">Returns</span>
          <span className="header__option__bottom">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option__top">Your</span>
          <span className="header__option__bottom">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBagIcon />
            <span className="header__option__bottom header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
