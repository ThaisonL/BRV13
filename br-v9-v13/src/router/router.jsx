import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
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
        path: "recommend",
        element: <Recommend />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
