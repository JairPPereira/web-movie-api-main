import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Sonic from './pages/Filmes/Sonic';
import Acasadomedo from './pages/Filmes/Acasadomedo';
import A2067 from './pages/Filmes/2067';




import './global.css'
 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/454626" element={<Sonic/>}/>
      <Route path="/322518" element={<Acasadomedo/>}/>
      <Route path="/528085" element={<A2067/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
 
