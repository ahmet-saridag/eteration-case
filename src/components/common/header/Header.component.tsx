// import { useState } from "react";
import bagIcon from "../../../assets/bag-icon.svg";
import profileIcon from "../../../assets/profile-icon.svg";
import searchIcon from "../../../assets/search.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className="header__title">Eteration</h1>
          <div className="header__search">
            <img src={searchIcon} alt="Bag icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header__status">
            <div className="header__status-amount">
              <img src={bagIcon} alt="Bag icon" />
              <span>117.000₺</span>
            </div>
            <div className="header__status-profile">
              <img src={profileIcon} alt="Bag icon" />
              <span>Kerem</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-14 bg-blue-600 flex items-center md:px-0 px-2">
        <div className="container flex gap-2 justify-between items-center mx-auto ">
          <h1 className="text-white md:text-initial">Eteration</h1>
          <div className="md:w-4/5 bg-red-500  gap-3 flex justify-between items-center">
            <form className="w-2/5">
              <label
                htmlFor="default-search"
                className="md:mb-2 md:text-sm text-xs font-medium text-white-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="md:w-4 md:h-4 h-3 w-3 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="md:w-full w-auto md:h-11 h-9 md:p-4 pl-7 md:ps-10 md:text-sm text-xs text-white-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white md:visible hidden absolute end-2.5 bottom-1 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="text-white flex justify-center items-center md:gap-3 gap-2">
              <div className="flex md:flex-inherit flex-col justify-center items-center">
                <img
                  className="md:mr-2 md:mb-0 mb-1"
                  src={bagIcon}
                  alt="Bag icon"
                />
                <span className="md:text-inherit text-sm">117.000₺</span>
              </div>
              <div className="flex md:flex-inherit flex-col justify-center items-center">
                <img className="md:mr-2" src={profileIcon} alt="Profile icon" />
                <span className="md:text-inherit text-sm">Kerem</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
