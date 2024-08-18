import { useState } from "react";
import "./App.css";
import "./firebaseConfig";
import Footer from "./components/footer";
import NAVBAR_MAIN from "./components/navbar";
import NAVBAR_SEC from "./components/navbar_sec";
import { Outlet, ScrollRestoration } from "react-router-dom";
import WhatsappCta from "./components/whatsappCta";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col">
      <ScrollRestoration />
      <ToastContainer style={{ zIndex: 100004 }} />
      {window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      })}
      {visible ? <NAVBAR_MAIN/> : <NAVBAR_SEC />}
      <Outlet />
      <Footer />
      <WhatsappCta />
    </div>
  );
}

export default App;
