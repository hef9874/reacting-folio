import "./App.css";
import Navigation from "./components/Navigation";
// import Projects from "./components/AllProjects";
// import Contact from "./components/Contact";
import Resume from "./components/Resume";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
         <Navigation />
        <div>
        {/* <Header /> */}
        <h1 className="text-2xl font-bold">Welcome to my Portfolio</h1>
      </div>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;