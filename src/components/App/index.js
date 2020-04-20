import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home";
import Manuscripts from "../Manuscripts";
import Content from "../Content";

import Transcribe from "../Transcribe";
import "./App.scss";
import Footer from "../Footer";
import ProtectedRoute from "../ProtectedRoute";
import api from '../../api';
import store from '../../Store';
import { observer } from "mobx-react";


const App = class App extends React.Component {
    constructor(){
        super()
        this.store = store
    }
  componentDidMount() {
    // Update height of container
    api.populateManuscripts()
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
              {/* <ProtectedRoute nextRoute="/transcribe/:pageId"> */}
                <Transcribe pageId={store.state.current_page_id} />
              {/* </ProtectedRoute> */}
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
};
export default observer(App);
