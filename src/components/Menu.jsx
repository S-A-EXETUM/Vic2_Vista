import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Menucontent } from './Menucontent'
import './Menu.css'
import { getAuth, onAuthStateChanged } from "firebase/auth"

// Ultima modificación Constanza Castillo 12/04/2022
const Menu = () => {
  const navegacion = useNavigate()
  const [usuario, setUsuario] = useState(null)
  const user = getAuth()
  useEffect(() => {
    user.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user.email)
      }
    })
  }, [])
  const cerrarSesion = () => {
    user.signOut()
    setUsuario(null)
    console.log('Usuario Desconectado')
    console.log(user)
    navegacion('/')
  }
  return (
    <>
      <div className='barra'>
        <IconContext.Provider value={{ "color": "white" }}>
          <div className='menu-bootstrap container-cristal barra'>
            <div >
              <img className='m-5 img-thumbnail w-50 rounded-circle' src='https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_610/v1513615213/content-items/002/192/266/08.randy-lewis-fotografias-surrealistas-original.jpg?1513615213' alt='logo' />
            </div>
            <div>
              <ul className='nav-menu-items container-fluid' >
                {Menucontent.map((item, index) => {
                  return (
                    !usuario && item.title === "Cuenta" ?
                      (<li key={index} className='nav-text'>
                        <Link to={'/login'}>
                          <FaIcons.FaUser></FaIcons.FaUser>
                          <span>Inicio Sesión</span>
                        </Link>
                      </li>)
                      :
                      (<li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>)
                  )
                })}
              </ul>
            </div>
            <div>
              {
                !usuario ?
                  (<span></span>)
                  :
                  (<button onClick={cerrarSesion} className="btn btn-outline-warning ms-4">
                    Cerrar sesión
                  </button>)
              }
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default Menu