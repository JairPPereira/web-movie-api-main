import React from 'react';
import {Link } from "react-router-dom";
import Navbar from './Navbar';
import './styles'


export default function Home() {

  return (
    <><Navbar />
      <h1 className='home'>
      <div className="nave">
        <nav>
        <p><br /></p>
        <Link to="/todosf">Filmes de A a Z</Link>
        <p><br /></p>
        <Link to="/porcategoria">Filmes Por categoria</Link>
        <p><br /></p>
        <Link to="/series">Séries</Link>
        <p><br /></p>
        <Link to="/playlistyou">Playlist de filmes do youtube</Link>
        <p><br /></p>
        <Link to="/TVs">TVs</Link>
        <p><br /></p>
        <Link to="/radios">Radios</Link>
        <p><br /></p>

          
  
        </nav>
        <p>O site JPP APP é uma plataforma para assistir filmes e séries online, nesta página, funcionamos como base nas últimas tecnologias lançadas nesta geração voltada ao uso de inteligência artificial & robots & API de dados, ou seja, não hospedamos vídeos em nossos servidores, apenas, de forma automática, indexamos os arquivos que são capturados pela web, nos tornando completamente legais & dentro da lei. O uso desta plataforma é de total responsabilidade do usuário. Qualquer violação de direitos autorais, entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre o conteúdo, entre em contato conosco para obter a devida ajuda.</p>
        <p><br /></p><p>Ajude a manter nosso site</p>
        <p><br /></p>
        <p2>Pix: jairppereira21@gmail.com</p2>
        <p><br /></p></div>
</h1>

    </>
        
        
         
  );
}
