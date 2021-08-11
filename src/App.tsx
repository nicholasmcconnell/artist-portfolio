import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/contact' >
            <Form />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
