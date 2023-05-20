import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import About from "./components/About";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
       <Navigation />
       <Home />
       <About />
       <AllProjects />
       <Contact />
       </div>
  );
}

export default App;