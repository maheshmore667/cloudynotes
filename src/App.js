import "./App.css";
import Navlist from "./components/Navlist";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navlist />
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
      </Router>
    </>
  );
}

export default App;
