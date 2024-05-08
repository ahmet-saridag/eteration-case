// import { useState } from "react";
// import searchIcon from "../../assets/search.svg";

function ProductDetailComponent() {
  return (
    <>
      <div className="product-detail__card">
        <div className="product-detail__card-image">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="product-detail__card-content">
          <h3 className="product-detail__card-title">iPhone 11 Pro Max</h3>
          <h2 className="product-detail__card-subtitle">10.000₺</h2>
          <button className="product-detail__card-button">Add to Cart</button>
          <p className="product-detail__card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetailComponent;
