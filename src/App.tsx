import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/home.page";
import RootLayout from "./pages/route";
import ProductDetailLayout from "./components/common/layout/product-detail-layout/product-detail-layout.component";
import "../src/main.scss";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/product/:productId",
        id: "product-detail",
        element: <ProductDetailLayout />,
      },
      {
        path: "/page/:pageId",
        id: "page-id",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
