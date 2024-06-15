import { useRouteError } from "react-router-dom";
import Navbar_Sec from "./navbar_sec";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar_Sec />
      <div id="error_page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Page Requested Is {error.statusText || error.message}!</i>
        </p>
      </div>
    </>
  );
}
