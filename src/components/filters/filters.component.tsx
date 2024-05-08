// import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import CheckoutComponent from "../checkout/checkout.component";

function FiltersComponent() {
  return (
    <>
      <div className="filters grid grid-cols-12 lg:flex">
        <div className="filters__sort xl:col-span-12 col-span-6 xl:order-first order-last xl:mt-0 mt-3">
          <div className="filters__title">Sort By</div>
          <div className="filters__card">
            <div className="filters__sort-radio">
              <label htmlFor="oldToNew">
                <input type="radio" id="oldToNew" name="oldToNew" /> Old to new
              </label>
            </div>
            <div className="filters__sort-radio">
              <label htmlFor="NewToOld">
                <input type="radio" id="NewToOld" name="NewToOld" /> New to old
              </label>
            </div>
            <div className="filters__sort-radio">
              <label htmlFor="PriceHightToLow">
                <input
                  type="radio"
                  id="PriceHightToLow"
                  name="PriceHightToLow"
                />
                Price hight to low
              </label>
            </div>
            <div className="filters__sort-radio">
              <label htmlFor="PriceLowToHigh">
                <input type="radio" id="PriceLowToHigh" name="PriceLowToHigh" />
                Price low to High
              </label>
            </div>
          </div>
        </div>
        <div className="filters__brands xl:col-span-12 col-span-6">
          <div className="filters__title">Brands</div>
          <div className="filters__card">
            <div className="filters__search">
              <img src={searchIcon} alt="Bag icon" />
              <input type="search" placeholder="Search" />
            </div>
            <div className="filters__checkbox-container">
              <div className="filters__checkbox">
                <input id="apple" type="checkbox" />
                <label htmlFor="apple">Apple</label>
              </div>
              <div className="filters__checkbox">
                <input id="samsung" type="checkbox" />
                <label htmlFor="samsung">Samsung</label>
              </div>
              <div className="filters__checkbox">
                <input id="Huawei" type="checkbox" />
                <label htmlFor="Huawei">Huawei</label>
              </div>
              <div className="filters__checkbox">
                <input id="Huawei" type="checkbox" />
                <label htmlFor="Huawei">Huawei</label>
              </div>
              <div className="filters__checkbox">
                <input id="Huawei" type="checkbox" />
                <label htmlFor="Huawei">Huawei</label>
              </div>
            </div>
          </div>
        </div>
        <div className="filters__model xl:col-span-12 col-span-6">
          <div className="filters__title">Model</div>
          <div className="filters__card">
            <div className="filters__search">
              <img src={searchIcon} alt="Bag icon" />
              <input type="search" placeholder="Search" />
            </div>
            <div className="filters__checkbox-container">
              <div className="filters__checkbox">
                <input id="11" type="checkbox" />
                <label htmlFor="11">11</label>
              </div>
              <div className="filters__checkbox">
                <input id="12" type="checkbox" />
                <label htmlFor="12">12</label>
              </div>
              <div className="filters__checkbox">
                <input id="13" type="checkbox" />
                <label htmlFor="13">13</label>
              </div>
              <div className="filters__checkbox">
                <input id="Huawei" type="checkbox" />
                <label htmlFor="Huawei">14</label>
              </div>
              <div className="filters__checkbox">
                <input id="Huawei" type="checkbox" />
                <label htmlFor="Huawei">15</label>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-12 col-span-6 xl:mt-0 mt-3 xl:hidden visible">
          <CheckoutComponent />
        </div>
      </div>
    </>
  );
}

export default FiltersComponent;
