import "./App.css";
import Navlist from "./components/Navlist";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import Login from "./components/Login";

function App() {
  return (
    <>
    <div className="container-fluid">
      <NoteState>
        <Router>
          <Navlist />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Router>
      </NoteState>
      </div>
    </>
  );
}

export default App;
