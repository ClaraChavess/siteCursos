import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banco from './components/banco';

function App(){
  return(
    <div>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Banco" element={<banco />}/> 
        </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;