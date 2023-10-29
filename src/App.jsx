import "./App.css";
import Navbar from "./components/Navbar";
import Mainhero from "./components/Mainhero";
import About from "./components/About";
import Director from "./components/Director";

function App() {
  return (
    <>
      <Navbar />
      <Mainhero />
      <About />
      <Director />
      <Navbar />
    </>
  );
}

export default App;
