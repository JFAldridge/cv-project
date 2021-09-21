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
      <Header />
      <Hero />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/"  render={(props) => <CVCreator {...props}/>}>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
