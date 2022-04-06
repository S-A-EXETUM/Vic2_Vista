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
      <div className='flex flex-wrap'>
        {/*<div className='flex flex-wrap w-full'>*/}
        <div className='flex'>
          <Menu/>
        </div>
        <div className='flex-1'>
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
