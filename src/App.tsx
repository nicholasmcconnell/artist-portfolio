import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Form } from "./components/Form/Form";
// import Container from "./components/Container1/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* <Container> */}

        <Switch>
          <Route exact path='/contact' >
            <Form />
          </Route>

        </Switch>
        {/* </Container> */}
      </Router>

    </div>
  );
}

export default App;
