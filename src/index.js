import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

import Acasadomedo from './components/pages/Filmes/Acasadomedo';
import A2067 from './components/pages/Filmes/2067';

import './global.css'
import Acertodecontas from './components/pages/Filmes/Acertodecontas';
import TVs from './components/pages/TVs';
import Todosf from './pages/Home/Todosf';
import Porcategoria from './components/pages/Porcategoria';
import Playlistyou from './components/pages/Playlistyou';
import Radios from './components/pages/Radios';
import Series from './components/pages/Series';
import Aeradogelo2 from './components/pages/Aeradogelo2';




ReactDOM.render(
  <BrowserRouter>

    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/tvs" element={<TVs/>}/>
      
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/322518" element={<Acasadomedo/>}/>
      <Route path="/528085" element={<A2067/>}/>
      <Route path="/91333" element={<Acertodecontas/>}/>
      <Route path="/todosf" element={<Todosf/>}/>
      <Route path="/porcategoria" element={<Porcategoria/>}/>
      <Route path="/playlistyou" element={<Playlistyou/>}/>
      <Route path="/radios" element={<Radios/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/950" element={<Aeradogelo2/>}/>
      
      
    

    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);
 
