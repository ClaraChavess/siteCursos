import React from 'react';
import Header from './components/header';
import CriarConta from './components/CriarConta';
import SobreNos from './components/SobreNos'; 
import Contato from './components/Contato';
import Home from './components/Home';
import MeusCursos from './components/MeusCursos';
import Banco from './components/banco';
import Design from './components/design';
import Poo from './components/poo';
import Rede from './components/rede';
import Robot from './components/robot';
import Web from './components/web';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (

      <BrowserRouter>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
            <Route path='/sobre-nos' element={<SobreNos/>}></Route>
            <Route path='/criar-conta' element={<CriarConta/>}></Route>
            <Route path='/meus-cursos' element={<MeusCursos/>}></Route>
            <Route path="/banco-de-dados" element={<Banco />}></Route>
            <Route path="/design" element={<Design />}></Route>
            <Route path="/poo" element={<Poo />}></Route>
            <Route path="/redes" element={<Rede />}></Route>
            <Route path="/robotica" element={<Robot />}></Route>
            <Route path="/programacao-web" element={<Web />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
