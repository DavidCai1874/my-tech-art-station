import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


// 这就是个链接app和网页的水管
// The code that links the app to the webpage

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-tech-art-station">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);