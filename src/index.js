import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/cv.scss';

import * as themes from './theme/schema.json';
import * as allFonts from './theme/allFonts.json';
import { setToLS } from './utils/storage';

const Index = () => {
  setToLS('all-themes', themes.default);
  setToLS('all-fonts', allFonts.default);
  return(
    <App />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
