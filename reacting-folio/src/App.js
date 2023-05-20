import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
       <Navigation />
       <Home />
       <About />
       <AllProjects />
       </div>
  );
}

export default App;