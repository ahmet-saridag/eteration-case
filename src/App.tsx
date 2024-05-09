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
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ":productId",
        id: "product-detail",
        element: <ProductDetailLayout />,
        // action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
