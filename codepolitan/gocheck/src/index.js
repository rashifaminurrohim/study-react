import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './latihan_1_2.css';
import App from './App';
import Notes from './Notes';
import Latihan1 from './Latihan1';
import Latihan2 from './Latihan2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Notes /> */}
    {/* <Latihan1 /> */}
    <Latihan2 />
  </React.StrictMode>
);

