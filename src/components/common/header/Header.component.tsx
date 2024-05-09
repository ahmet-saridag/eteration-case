// import { useState } from "react";
import bagIcon from "../../../assets/bag-icon.svg";
import profileIcon from "../../../assets/profile-icon.svg";
import searchIcon from "../../../assets/search.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  let checkoutAmount = useSelector((state: any) => state.amount.checkoutAmount);
  return (
    <>
      <div className="header">
        <div className="container">
          <h1
            className="header__title cursor-pointer"
            onClick={() => navigate("/")}
          >
            Eteration
          </h1>
          <div className="header__search">
            <img src={searchIcon} alt="Bag icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header__status">
            <div className="header__status-amount">
              <img src={bagIcon} alt="Bag icon" />
              <span>{checkoutAmount}₺</span>
            </div>
            <div className="header__status-profile">
              <img src={profileIcon} alt="Bag icon" />
              <span>Ahmet</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
