import NavBar from "./components/NavBar";

/* css */
import './app.css';
import Intro from "./components/Intro";
import FirstSection from "./components/FirstSection";

function App() {
  return (
    <div id="app"> 
      <NavBar />
      <Intro />
      <FirstSection />
    </div>
  );
}

export default App;
