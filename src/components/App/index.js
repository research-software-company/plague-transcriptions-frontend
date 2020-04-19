import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home";
import Manuscripts from "../Manuscripts";
import Content from "../Content";

import Transcribe from "../Transcribe";
import "./App.scss";
import Footer from "../Footer";

const App = class App extends React.Component {
  componentDidMount() {
    // Update height of container
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/manuscripts">
              <Manuscripts />
            </Route>
            <Route path="/transcribe/:pageId">
              <Transcribe />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
};
export default App;
