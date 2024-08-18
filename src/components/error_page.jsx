import { useRouteError } from "react-router-dom";
import NAVBAR_SEC from "./navbar_sec";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <NAVBAR_SEC />
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
