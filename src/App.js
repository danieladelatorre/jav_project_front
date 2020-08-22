import React from 'react';
import Information from './components/Information';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import Person from './components/Person';
import GetPersonInfo from './components/GetPersonInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/person">
              <Person />
            </Route>

            <Route path="/person/:id">
              <GetPersonInfo />
            </Route>

            <Route path="/graphs">
              <Information />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
