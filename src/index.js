import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

import A2067 from './components/pages/2067';

import './global.css'
import Acertodecontas from './components/pages/Acertodecontas';
import TVs from './components/pages/TVs';
import Todosf from './pages/Home/Todosf';
import Porcategoria from './components/pages/Porcategoria';
import Playlistyou from './components/pages/Playlistyou';
import Radios from './components/pages/Radios';
import Series from './components/pages/Series';
import Aeradogelo2 from './components/pages/Aeradogelo2';
import Acasadomedo from './components/pages/Acasadomedo';
import Sonic1 from './components/pages/Sonic1';
import Afilhadorei from './components/pages/Afilhadorei';
import Assasinatosdopassado from './components/pages/Assasinatosdopassado';




ReactDOM.render(
  <BrowserRouter>

    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/tvs" element={<TVs/>}/>
      
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/528085" element={<A2067/>}/>
      <Route path="/91333" element={<Acertodecontas/>}/>
      <Route path="/todosf" element={<Todosf/>}/>
      <Route path="/porcategoria" element={<Porcategoria/>}/>
      <Route path="/playlistyou" element={<Playlistyou/>}/>
      <Route path="/radios" element={<Radios/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/950" element={<Aeradogelo2/>}/>
      <Route path="/322518" element={<Acasadomedo/>}/>
      <Route path="/454626" element={<Sonic1/>}/>
      <Route path="/245842" element={<Afilhadorei/>}/>
      <Route path="/399055" element={<Aformadaagua/>}/>
      <Route path="/191137" element={<Assasinatosdopassado/>}/>
      

    

    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);
 
