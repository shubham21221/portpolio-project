import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/Services/About";
import "./App.css";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Footer />
    </div>
  );
}

export default App;
