import React from 'react';
import Header from './components/header';
import CriarConta from './components/CriarConta';
import SobreNos from './components/SobreNos'; 
import Contato from './components/Contato';
import Home from './components/Home';
import MeusCursos from './components/MeusCursos';
import { BrowserRouter, Route, Routes, Router,Link } from 'react-router-dom';
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
        </Routes> 
        
        <Footer></Footer>
   </div>
   </BrowserRouter>

  )
};
export default App;
