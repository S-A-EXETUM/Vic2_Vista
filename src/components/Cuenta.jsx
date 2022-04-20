import React, { useState, useEffect } from 'react'
import * as BootstrapIcons from 'react-icons/bs'
import { app, db } from '../firebaseconfig'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Swal from '@sweetalert2/theme-dark'
import { usuarioLogged, findAdmin } from './MetodosFirebase'
// Ultima modificación Constanza Castillo 12/04/2022
const Cuenta = () => {
  const navegacion = useNavigate();
  const [email, setEmail] = useState('')
  const [time, setTime] = useState('')
  const user = getAuth()
  const idUser = user.currentUser.uid
  const adm = findAdmin()

  const adminRedirect = () => {
    navegacion('/administrador')
  }

  useEffect(() => {
    user.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email)
        let fecha = new Date(user.metadata.creationTime)
        fecha = new Date(fecha.toISOString())
        let dia = fecha.getDate().toString().length < '1' ? '0' + fecha.getDate() : fecha.getDate()
        let mes = fecha.toISOString().split('-')[1]
        setTime(dia + "/" + mes + "/" + fecha.getUTCFullYear())
      }
    })
  }, [])
  const resetPassword = () => {
    sendPasswordResetEmail(user, email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert('Correo de restauración de contraseña enviada!')

      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      })
  }
  return (
    <>
      <div className='row m-2' style={{ "margin": "0" }}>
        <div className="col-12 mt-5">
          <div className="col-4">

            <div className="card card-body shadow bg-info bg-opacity-10">
              <span>Correo: {email}</span>
              <span>Registrado desde: {time}</span>
            </div>
          </div>
          <div className="col-4">
            <button onClick={resetPassword} className='btn'>Cambiar contraseña</button>
          </div>
          <div className="col"></div>
        </div>
        <div className="col-4">
          {
            adm != 'No admin' ?
              (<button className='btn btn-light' onClick={adminRedirect}>Admin</button>)
              :
              (
                <></>
              )
          }

        </div>
        <div className='row'>
          <div className="col">
            <div className="mt-3 ms-5 me-5">
              <div className="card bg-black bg-opacity-10 contenedor" style={{ "height": "65%", "margin": "inherit" }}>
                <div className="row justify-content-center" style={{ "margin": "0" }}>
                  <div className="col-12 me-5">
                    <Cardsv />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
const Cardsv = () => {
  const user = getAuth()
  const idUser = user.currentUser.uid
  const [favorito, setFavorito] = useState([])
  // const [id_rutina, setRutina] = useState(null)
  // const [id_dieta, setDieta] = useState(null)

  const url = process.env.REACT_APP_BACKEND_URL + `favoritos/`

  useEffect(() => {
    const getFavoritos = () => {
      axios.get(url + `usuario/${idUser}`)
        .then(response => {
          const { data } = response
          setFavorito(data)
        })
        .catch(e => {
          console.log(e)
        })
    }
    getFavoritos()
  }, [favorito])

  const borrarFav = (id) => {

    axios.delete(url + `${id}`)
      .then((result) => {
        console.log(result)
        Swal.fire({
          title: 'funca',
          icon: 'success'
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {
        favorito.map((item, index) => {
          return (
            <div key={index}>
              {
                item.id_rutina != null ?
                  (
                    <div className="bg-opacity-25 bg-white border-1 border-light card card-body m-5">
                      <div className="justify-content-between row">
                        <div className="col-11 col-md-6 col-lg-6">
                          <p>Nombre: {item.id_rutina[0].nombre}</p>
                        </div>
                        <div className='col col-md col-lg text-end'>
                          <button onClick={() => { borrarFav(item.id) }} className='btn btn-sm btn-info bg-transparent border-0' ><BootstrapIcons.BsFillTrashFill style={{ 'width': '25px', 'height': '25px' }} /></button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-7 col-md-6">
                          <iframe
                            src={item.id_rutina[0].video} style={{ 'height': '300px', 'width': '100%' }} frameBorder="0" allowFullScreen>
                          </iframe>
                        </div>
                        <div className="col col-lg col-md">
                          <h6>Músculo: {item.id_rutina[0].musculoObj}</h6>
                          <h6>Descripción: <br /> {item.id_rutina[0].descripcion}</h6>
                          <h6>Repeticiones: {item.id_rutina[0].repeticiones}</h6>
                          <h6>Set: {item.id_rutina[0].set}</h6>
                        </div>
                      </div>
                    </div>
                  )
                  :
                  (
                    <></>
                  )
              }
            </div>
          )
        })
      }

      {
        favorito.map((item, index) => {
          return (
            <div key={index}>
              {
                item.id_dieta != null ?
                  (
                    <div className="bg-opacity-25 bg-white border-1 border-light card card-body m-5">
                      <div className="justify-content-between row">
                        <div className="col-11 col-md-6 col-lg-6">
                          <p>Nombre: {item.id_dieta[0].nombre}</p>
                        </div>
                        <div className='col col-md col-lg text-end'>
                          <button onClick={() => { borrarFav(item.id) }} className='btn btn-sm btn-info bg-transparent border-0' ><BootstrapIcons.BsFillTrashFill style={{ 'width': '25px', 'height': '25px' }} /></button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-lg col-md">
                          <h6>Horario: {item.id_dieta[0].horario}</h6>
                          <h6>Alimentos: <br /> {item.id_dieta[0].alimentos}</h6>
                          <h6>Informacion nutricional: {item.id_dieta[0].infoNutricional}</h6>
                        </div>
                        <div className="col-12 col-lg-7 col-md-6">
                          <img src={item.id_dieta[0].foto} alt="Imagen" style={{ 'width': '60%' }} />
                        </div>
                      </div>
                    </div>
                  )
                  :
                  (
                    <></>
                  )
              }
            </div>
          )
        })
      }
    </>
  )
}
export default Cuenta