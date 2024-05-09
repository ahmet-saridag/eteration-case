// import { useState } from "react";
import CheckoutComponent from "../../../checkout/checkout.component";
import ProductDetailComponent from "../../../product-detail/product-detail.component";

function ProductDetailLayout() {
  return (
    <>
      <div className="product-detail-layout">
        <div className="container">
          <div className="product-detail-layout__detail">
            <ProductDetailComponent />
          </div>
          <div className="product-detail-layout__checkout">
            <CheckoutComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailLayout;
