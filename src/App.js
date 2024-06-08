import { useState } from "react";
import "./App.css";
import About from "./components/about";
import MainCarousel from "./components/carousel";
import Features from "./components/features";
import Landing from "./components/landing_page";
import Navbar_Main from "./components/navbar";
import Numbers from "./components/numbers";
import Team from "./components/team";
import Navbar_Sec from "./components/navbar_sec";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      {window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      })}
      {visible ? <Navbar_Main /> : <Navbar_Sec />}
      <div className="home">
        <div className="landing">
          <Landing />
        </div>
      </div>

      <About />
    </div>
  );
}

export default App;
