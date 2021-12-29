import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Epub from './components/Epub'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="boy" element={<Epub />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
