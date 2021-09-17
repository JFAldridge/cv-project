import React from 'react';
import { Switch, Route } from "react-router-dom";
import CVCreator from './components/cv/cv-creator';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import LoginForm from './components/auth/login-form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Header />
          <Hero />
          <LoginForm />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Hero />
          <CVCreator />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
