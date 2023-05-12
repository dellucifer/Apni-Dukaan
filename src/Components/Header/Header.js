import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
// import data from "../Home/ProductsList.json";

function Header() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      navigate("/");
    }
  };

  // const filteredproducts = data.filter((el) => {
  //   //if no input then return the original
  //   if (inputText === "") {
  //     return null;
  //   }
  //   //return the item which contains the user input
  //   else {
  //     return el.title.toLowerCase().includes(inputText);
  //   }
  // });

  // const addToBasket = (item) => {
  //   // pushing item to global data
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: item.id,
  //       title: item.title,
  //       price: item.price,
  //       image: item.image,
  //       rating: item.rating,
  //     },
  //   });
  // };

  // function addThreeDots(str) {
  //   if (str.length > 35) {
  //     return str.substring(0, 35) + "...";
  //   }
  //   return str;
  // }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={process.env.PUBLIC_URL + "/logo-apni_dukaan.png"}
          alt=""
        />
      </Link>

      <div className="header__search">
        <div className="search__upper">
          <input
            className="header__searchInput"
            type="text"
            autoFocus={true}
            onChange={inputHandler}
            value={inputText}
            placeholder="Search for you favourite items here"
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* <div className="searchres">
          <div className="searchres__wrapper">
            <ul className="searchres__list">
              {filteredproducts.map((item) => (
                <li
                  onClick={() => addToBasket(item)}
                  className="seacrchres__item"
                  key={item.id}
                >
                  <img className="search__img" src={item.image} alt="" />
                  <span>{addThreeDots(item.title)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option__top">
              Hello {user ? user?.email.split("@")[0] : "Guest"}
            </span>
            <span className="header__option__bottom">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__option__top">Returns</span>
            <span className="header__option__bottom">& Orders</span>
          </div>
        </Link>

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
