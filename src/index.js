import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EpubReader from './components/EpubReader';
import registerServiceWorker from 'react-service-worker';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="boy" element={<EpubReader />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
