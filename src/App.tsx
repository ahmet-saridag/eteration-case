// import { useState } from "react";
import Header from "./components/common/header/Header.component";
import MainLayoutComponent from "./components/common/layout/main-layout/MainLayout.component";
// import ProductDetailLayout from "./components/common/layout/product-detail-layout/ProductDetailLayout.component";

import "../src/main.scss";
import "./index.css";

function App() {
  return (
    <div className="app">
      {/* <ProductDetailLayout /> */}
      <Header />
      <MainLayoutComponent />
    </div>
  );
}

export default App;
