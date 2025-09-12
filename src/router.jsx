
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";

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
]);
