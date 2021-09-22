import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import CVCreator from './components/cv/cv-creator';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import LoginForm from './components/auth/login-form';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true);
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} loginToggle={toggleLogin}/>
      <Hero />
      <Switch>
        <Route path="/login">
          <LoginForm loggedIn={loggedIn} loginToggle={toggleLogin} />
        </Route>
        <Route path="/"  render={(props) => <CVCreator {...props} loggedIn={loggedIn} />}>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
