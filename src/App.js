import "./App.css";
import Navlist from "./components/Navlist";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";

function App() {
  return (
    <>
    <div className="container">
      <NoteState>
        <Router>
          <Navlist />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Router>
      </NoteState>
      </div>
    </>
  );
}

export default App;
