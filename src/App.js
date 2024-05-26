import "./App.css";
import About from "./components/about";
import MainCarousel from "./components/carousel";
import Navbar_Main from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <Navbar_Main />
      <div className="flex justify-center">
        <MainCarousel />
      </div>
      <About />
    </div>
  );
}

export default App;
