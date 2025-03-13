import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Company from "../pages/company";
import Contact from "../pages/Contact";
import StocksAndA from "../pages/StocksAndA";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "StocksAndA",
        element: <StocksAndA />,
      },
      {
        path: "Company",
        element: <Company />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
