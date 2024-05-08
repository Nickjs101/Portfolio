import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App bg-black">
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  );
}

export default App;
