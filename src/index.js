import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Sonic from './pages/Filmes/Sonic';
import Acasadomedo from './pages/Filmes/Acasadomedo';



import './global.css'
 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/675353" element={<Sonic/>}/>
      <Route path="/451877" element={<Acasadomedo/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
 
