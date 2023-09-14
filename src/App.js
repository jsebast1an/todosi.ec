import NavBar from "./components/NavBar";

/* css */
import './app.css';
import Intro from "./components/Intro";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div id="app"> 
      <NavBar />
      <Intro />
      <div className="reverseInMobile">
        <FirstSection />
        <SecondSection />
      </div>
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
