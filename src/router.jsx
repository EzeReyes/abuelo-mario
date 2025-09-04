
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";

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
    path: "*",
    element: <NotFound />,
  },
]);
