import React , {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Entrenamiento from './components/TiposEntrenamiento/Entrenamiento'
import TipoDieta from './components/TiposDietas/TipoDieta'
import Rutinas from './components/Rutinas'
import Inicio from './components/Inicio'
import Cuenta from './components/Cuenta'
import Login from './components/Login'
import Dieta from './components/Dieta'
import Menu from './components/Menu'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Ultima modificación Matthew Rocco 12/04/2022
function App() {
  const [usuario, setUsuario] = useState(null)
  const user = getAuth()
  useEffect(()=>{
    user.onAuthStateChanged((user)=>{
      if(user){
        setUsuario(user.email)
      }
    })
  })
  return (
    <Router>
      <div className='row' style={{"padding": "0", "margin": "0"}}>
        <div className='col-lg-2 col-md-3 col-4' style={{"padding": "0"}}>
          <Menu/>
        </div>
        <div className='col-lg col-md col' style={{"padding": "0"}}>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            {/* Lo mismo que en cuenta pero lo contrario */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/rutinas' element={<Rutinas/>}/>
            <Route path='/dieta' element={<Dieta/>}/>
            {
              usuario? 
              (<Route path='/cuenta' element={<Cuenta/>}/> )
              :
              (<Route path='/cuenta' element={<Login/>}/> )
            }
            <Route path='/rutinas/brazos' element={<Entrenamiento nombre={"Brazos"} />}/>
            <Route path='/rutinas/pecho' element={<Entrenamiento nombre={"Pecho"} />}/>
            <Route path='/rutinas/abdomen' element={<Entrenamiento nombre={"Abdomen"} />}/>
            <Route path='/rutinas/piernas' element={<Entrenamiento nombre={"Piernas"} />}/>
            <Route path='/rutinas/espalda' element={<Entrenamiento nombre={"Espalda"} />}/>
            <Route path='/rutinas/cardio' element={<Entrenamiento nombre={"Cardio"}/>}/>
            <Route path='/rutinas/hiit' element={<Entrenamiento nombre={"Hiit"}/>}/>
            <Route path='/rutinas/crossfit' element={<Entrenamiento nombre={"Crossfit"}/>}/>
            <Route path='/dieta/ectomorfo' element={<TipoDieta nombre={"Ectomorfo"} />}/>
            <Route path='/dieta/mesomorfo' element={<TipoDieta nombre={"Mesomorfo"} />}/>
            <Route path='/dieta/endomorfo' element={<TipoDieta nombre={"Endomorfo"} />}/>
            <Route path='/dieta/definir' element={<TipoDieta nombre={"Definir"} />}/>
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App
