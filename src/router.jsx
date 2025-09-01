
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Questions from "./pages/Questions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
]);
