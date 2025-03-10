import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
import Playlist from "../pages/Playlist";
import Contact from "../pages/Contact";

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
        path: "playlist",
        element: <Playlist />,
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
