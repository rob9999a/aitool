import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // تأكد من الامتداد الصحيح
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for JS components like modal
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
