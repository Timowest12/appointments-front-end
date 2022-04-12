import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Models from './pages/Models';
import TestDrive from './pages/TestDrive';
import Reservations from './pages/Reservations';
import Shopping from './pages/Shopping';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar content={<App />} />} />
        <Route path="/scooters" element={<Navbar content={<Models />} />} />
        <Route path="/reserve" element={<Navbar content={<TestDrive />} />} />
        <Route path="/reservations" element={<Navbar content={<Reservations />} />} />
        <Route path="/shopping" element={<Navbar content={<Shopping />} />} />
        {/* <Route path="/scooters" element={<Navbar content={<Models />} />} /> */}
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
