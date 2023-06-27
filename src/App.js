import NavBar from "./components/NavBar";

/* css */
import './app.css';
import Intro from "./components/Intro";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app"> 
      <NavBar />
      <Intro />
      <FirstSection />
      <Footer />
    </div>
  );
}

export default App;
