import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/logo_apni_dukaan.png"
        alt=""
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option__top">Hello Guest</span>
          <span className="header__option__bottom">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__option__top">Returns</span>
          <span className="header__option__bottom">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option__top">Your</span>
          <span className="header__option__bottom">Prime</span>
        </div>
        <div className="header__optionBasket">
            <ShoppingBagIcon />
            <span className="header__option__bottom header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
