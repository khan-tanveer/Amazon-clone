import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketIcon";

const Header = () => {
  return (
    <div className="header">
      {/* logo */}

      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      {/* search bar */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* header nav */}

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne"> hello user</span>
          <span className="header__optionLineTwo"> Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Returns </span>
          <span className="header__optionLineTwo"> orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> your</span>
          <span className="header__optionLineTwo"> prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
