import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './pages/App';
import Contato from './pages/Contato';
import Eventos  from './pages/Eventos';
import Discord from './pages/Discord';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/eventos' element={<Eventos />}></Route>
        {/* <Route path='/discord' element={<Discord />}></Route> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


