// import { useState } from "react";
// import searchIcon from "../../assets/search.svg";

function CheckoutComponent() {
  return (
    <>
      <div className="checkout">
        <div className="filters__title">Cart</div>
        <div className="filters__card">
          <div className="checkout__brands">
            <div className="checkout__brands-left">
              <div className="checkout__brands-title">Samsung s22</div>
              <div className="checkout__brands-subtitle">12.000₺</div>
            </div>
            <div className="checkout__brands-right">
              <button className="checkout__brands-grey">-</button>
              <button className="checkout__brands-blue">2</button>
              <button className="checkout__brands-grey">+</button>
            </div>
          </div>
          <div className="checkout__brands mt-2">
            <div className="checkout__brands-left">
              <div className="checkout__brands-title">Samsung s22</div>
              <div className="checkout__brands-subtitle">12.000₺</div>
            </div>
            <div className="checkout__brands-right">
              <button className="checkout__brands-grey">-</button>
              <button className="checkout__brands-blue">2</button>
              <button className="checkout__brands-grey">+</button>
            </div>
          </div>
          <div className="checkout__brands mt-2">
            <div className="checkout__brands-left">
              <div className="checkout__brands-title">Samsung s22</div>
              <div className="checkout__brands-subtitle">12.000₺</div>
            </div>
            <div className="checkout__brands-right">
              <button className="checkout__brands-grey">-</button>
              <button className="checkout__brands-blue">2</button>
              <button className="checkout__brands-grey">+</button>
            </div>
          </div>
        </div>
        <div className="filters__title mt-10">Checkout</div>
        <div className="filters__card">
          <h3 className="checkout__total-price">
            Total Price: <span>117.000₺</span>
          </h3>
          <button className="checkout__button">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutComponent;
