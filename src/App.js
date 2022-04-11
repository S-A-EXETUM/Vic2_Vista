import React , {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Crossfit from './components/TiposEntrenamiento/Crossfit';
import Cardio from './components/TiposEntrenamiento/Cardio';
import Hiit from './components/TiposEntrenamiento/Hiit';
import Espalda from './components/TiposEntrenamiento/Espalda';
import Abdomen from './components/TiposEntrenamiento/Abdomen';
import Piernas from './components/TiposEntrenamiento/Piernas';
import Brazos from './components/TiposEntrenamiento/Brazos';
import Pecho from './components/TiposEntrenamiento/Pecho';
import Rutinas from './components/Rutinas';
import Inicio from './components/Inicio';
import Cuenta from './components/Cuenta';
import Login from './components/Login';
import Dieta from './components/Dieta';
import Menu from './components/Menu';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
function App() {
  const [usuario, setUsuario] = useState(null);
  const user = getAuth();
  useEffect(()=>{
    user.onAuthStateChanged((user)=>{
      if(user){
        setUsuario(user.email);
      }
    })
  });
  return (
    <Router>
      <div className='row' style={{"padding": "0", "margin": "0"}}>
        <div className='col-lg-2 col-md-3 col-4' style={{"padding": "0"}}>
          <Menu/>
        </div>
        <div className='col-lg col-md col' style={{"padding": "0"}}>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/rutinas' element={<Rutinas/>}></Route>
            <Route path='/dieta' element={<Dieta/>}></Route>
            {
              
              usuario?
              (
                <Route path='/cuenta' element={<Cuenta/>}></Route>
              )
              :
              (
                <Route path='/cuenta' element={<Login/>}></Route>
              )
            }
            <Route path='/rutinas/brazos' element={<Brazos/>}></Route>
            <Route path='/rutinas/pecho' element={<Pecho/>}></Route>
            <Route path='/rutinas/abdomen' element={<Abdomen/>}></Route>
            <Route path='/rutinas/piernas' element={<Piernas/>}></Route>
            <Route path='/rutinas/espalda' element={<Espalda/>}></Route>
            <Route path='/rutinas/cardio' element={<Cardio/>}></Route>
            <Route path='/rutinas/hiit' element={<Hiit/>}></Route>
            <Route path='/rutinas/crossfit' element={<Crossfit/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
