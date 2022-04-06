import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Entrenamiento from './components/Entrenamiento';
import Inicio from './components/Inicio';
import Gastos from './components/Gastos';
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
            <Route path='/gastos' element={<Gastos/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
