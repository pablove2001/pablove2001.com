import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
