import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error_Page from "../components/error_page";
import Homepage from "../components/homepage";
import AboutPage from "../components/aboutpage";
import DiningPage from "../components/diningpage";
import EventsPage from "../components/eventspage";
import AccommodationPage from "../components/accommodationPage";
import ContactUsPage from "../components/contactpage";
import EntertainmentPage from "../components/entertainmentPage";

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
      {
        path: "accommodation",
        element: <AccommodationPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "entertainment",
        element: <EntertainmentPage />,
      },
    ],
  },
]);

export default router;
