import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { removeFromLS } from './utils/storage';
import CVCreator from './components/cv/cv-creator';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import LoginForm from './components/auth/login-form';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    removeFromLS('token');
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutHandle={handleLogout}/>
      <Hero />
      <Switch>
        <Route path="/login">
          <LoginForm loggedIn={loggedIn} loginHandle={handleLogin} />
        </Route>
        <Route path="/"  render={(props) => <CVCreator {...props} loggedIn={loggedIn} />}>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
