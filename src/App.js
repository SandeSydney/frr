import "./App.css";
import About from "./components/about";
import MainCarousel from "./components/carousel";
import Features from "./components/features";
import Navbar_Main from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Navbar_Main />
      <div className="flex justify-center">
        <MainCarousel />
      </div>
      <About />
      <Features/>
    </div>
  );
}

export default App;
