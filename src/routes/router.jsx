import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error_Page from "../components/error_page";
import Homepage from "../components/homepage";
import AboutPage from "../components/aboutpage";
import DiningPage from "../components/diningpage";
import EventsPage from "../components/eventspage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Page />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "dining",
        element: <DiningPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
    ],
  },
]);

export default router;
