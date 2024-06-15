import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error_Page from "../components/error_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Page />,
  },
]);

export default router;
