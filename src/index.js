import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/cv.scss';
import { HashRouter } from "react-router-dom";


import * as themes from './theme/schema.json';
import * as allFonts from './theme/allFonts.json';
import { setToLS, existsInLS } from './utils/storage';

const Index = () => {
  if (!existsInLS('all-themes')) {
    setToLS('all-themes', themes.default);
  }
  setToLS('theme', themes.default.data.navyAvi);
  setToLS('all-fonts', allFonts.default);
  return(
    <App />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Index />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
