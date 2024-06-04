import "./App.css";
import About from "./components/about";
import MainCarousel from "./components/carousel";
import Features from "./components/features";
import Navbar_Main from "./components/navbar";
import Numbers from "./components/numbers";
import Team from "./components/team";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Navbar_Main />
      <div className="flex justify-center">
        <MainCarousel />
      </div>
      <About />
      <Features/>
      <Numbers/>
      <Team/>
    </div>
  );
}

export default App;
