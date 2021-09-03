import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
// import { Form } from "./components/FormNick/FormNick";
import { Container } from './components/Container/Container'
import { Form } from "./components/Form/Form";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />


        <Switch>
          <Route exact path='/contact' >
            {/* <Container> */}
            <Form />
            {/* </Container> */}
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
