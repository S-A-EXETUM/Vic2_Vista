import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Espalda from './components/TiposEntrenamiento/Espalda';
import Abdomen from './components/TiposEntrenamiento/Abdomen';
import Piernas from './components/TiposEntrenamiento/Piernas';
import Brazos from './components/TiposEntrenamiento/Brazos';
import Pecho from './components/TiposEntrenamiento/Pecho';
import Entrenamiento from './components/Entrenamiento';
import Inicio from './components/Inicio';
import Cuenta from './components/Cuenta';
import Login from './components/Login';
import Dieta from './components/Dieta';
import Menu from './components/Menu';


function App() {
  return (
    <Router>
      <div className='row' style={{"padding": "0", "margin": "0"}}>
        <div className='col-2' style={{"padding": "0"}}>
          <Menu/>
        </div>
        <div className='col' style={{"padding": "0"}}>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/entrenamiento' element={<Entrenamiento/>}></Route>
            <Route path='/dieta' element={<Dieta/>}></Route>
            <Route path='/cuenta' element={<Cuenta/>}></Route>
            <Route path='/entrenamiento/brazos' element={<Brazos/>}></Route>
            <Route path='/entrenamiento/pecho' element={<Pecho/>}></Route>
            <Route path='/entrenamiento/abdomen' element={<Abdomen/>}></Route>
            <Route path='/entrenamiento/piernas' element={<Piernas/>}></Route>
            <Route path='/entrenamiento/espalda' element={<Espalda/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
