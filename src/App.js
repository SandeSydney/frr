import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Navbar_Main from "./components/navbar";
import Navbar_Sec from "./components/navbar_sec";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col">
      {window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      })}
      {visible ? <Navbar_Main /> : <Navbar_Sec />}
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
