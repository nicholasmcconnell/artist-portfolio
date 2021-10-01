import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Form } from "./components/Form/Form";
import FormSignup from "./components/Form/FormSignup/FormSignup";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/contact' >
          </Route>
          <Route exact path='/signup' >
            <FormSignup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
