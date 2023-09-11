

import "./home.css";
import Home from "./Home";
import About from "./about";
import Contact from "./Contact";
import Footer from "./Footer";
// import Navbar from "../homeComponents/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home id="home-section"/> */}
      {/* <About id="about-section"/> */}
      {/* <Work />
      {/* <Testimonial /> */}
      {/* <Contact id="contact-section"/> */}
      <div id="home-section">
        <Home />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="contact-section">
        <Contact />
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


