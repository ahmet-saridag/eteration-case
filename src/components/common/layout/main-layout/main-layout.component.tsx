// import { useState } from "react";
import CardComponent from "../../../card/card.component";
import CheckoutComponent from "../../../checkout/checkout.component";
import FiltersComponent from "../../../filters/filters.component";

import PaginationComponent from "../../../pagination/pagination.component";
function MainLayoutComponent() {
  return (
    <>
      <div className="main-layout">
        <div className="container">
          <div className="main-layout__filters">
            <FiltersComponent />
          </div>
          <div className="main-layout__cards">
            <div className="grid grid-cols-12 gap-y-6 gap-x-3 mb-5">
              <CardComponent />
            </div>
            <PaginationComponent />
          </div>
          <div className="main-layout__checkout">
            <CheckoutComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayoutComponent;