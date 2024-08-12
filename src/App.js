import { useState } from "react";
import "./App.css";
import "./firebaseConfig";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Navbar_Main from "./components/navbar";
import Navbar_Sec from "./components/navbar_sec";
import { Outlet, ScrollRestoration } from "react-router-dom";
import WhatsappCta from "./components/whatsappCta";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col">
      <ScrollRestoration />
      {window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      })}
      {visible ? <Navbar_Main /> : <Navbar_Sec />}
      <Outlet />
      <Footer />
      <WhatsappCta />
    </div>
  );
}

export default App;
