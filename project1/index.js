import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
//import App from './App.css';
//import App from './App';

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from './Loginpage';
import Dash from './Dashboard';

import reportWebVitals from './reportWebVitals';
//import Login from './Loginpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Rot /> */}
    {/* <Dash /> */}
    {/* <Login /> */}
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Dashboard" element={<Dash/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
