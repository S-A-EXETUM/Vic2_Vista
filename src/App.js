import React , {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { app, db } from './firebaseconfig'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import Entrenamiento from './components/TiposEntrenamiento/Entrenamiento'
import TipoDieta from './components/TiposDietas/TipoDieta'
import Rutinas from './components/Rutinas'
import Inicio from './components/Inicio'
import Cuenta from './components/Cuenta'
import Login from './components/Login'
import Dieta from './components/Dieta'
import Menu from './components/Menu'
import { Administrador } from './components/Administrador'
import { entContentDef, entContentAde} from './components/Rucontent'
import { Dietacontent } from './components/Dietacontent'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { usuarioLogged, findAdmin } from './components/MetodosFirebase'
// Ultima modificación Matthew Rocco 12/04/2022
function App() {
  const [usuario, setUsuario] = useState(null)
  const user = getAuth()
  const adm = findAdmin()

  useEffect(()=>{
    user.onAuthStateChanged((user)=>{
      if(user){
        setUsuario(user.email)
      }else{
        setUsuario(null)
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
              (<Route path='/cuenta' element={<Cuenta/>}/>)
              :
              (<Route path='/cuenta' element={<Login/>}/> )
            }

            {
              entContentDef.map((item, index) => <Route key={index} path={item.path} element={<Entrenamiento nombre={item.title} descripcion={item.descripcion} />}/>)
            }

            {
              entContentAde.map((item, index) => <Route key={index} path={item.path} element={<Entrenamiento nombre={item.title} descripcion={item.descripcion} />}/>)
            }

            {
              Dietacontent.map((item, index) => <Route key={index} path={item.path} element={<TipoDieta nombre={item.title} descripcion={item.descripcion} />}/>)
            }

            {
              adm !== 'No admin' && usuario !== null? 
              (<Route path='/administrador' element={<Administrador/>}/>)
              :
              (<Route path='/administrador' element={<Inicio/>}/> )
            }

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
