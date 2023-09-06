import NavBar from "./components/NavBar";

/* css */
import './app.css';
import Intro from "./components/Intro";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";

function App() {
  return (
    <div id="app"> 
      <NavBar />
      <Intro />
      <FirstSection />
      <SecondSection />
      <Footer />
    </div>
  );
}

export default App;
