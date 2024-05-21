import "./App.css";
import MainCarousel from "./components/carousel";
import Navbar_Main from "./components/navbar";

function App() {
  return (
    <>
        <Navbar_Main/>
        <div className="flex justify-center">
          <MainCarousel />
        </div>
    </>
  );
}

export default App;
