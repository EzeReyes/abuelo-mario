
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import ProductType from "./pages/ProductType";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/all-products",
    element: <AllProducts />
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/:id",
    element: <Product />
  },
  {
    path: "/productos/:tipo",
    element: <ProductType />
  }
]);
