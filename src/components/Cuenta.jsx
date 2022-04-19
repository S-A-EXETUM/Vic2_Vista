import React, { useState, useEffect } from 'react'
import { app, db } from '../firebaseconfig'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// Ultima modificación Constanza Castillo 12/04/2022
const Cuenta = () => {
  const navegacion = useNavigate();
  const [email, setEmail] = useState('')
  const [time, setTime] = useState('')
  const user = getAuth()
  const idUser = user.currentUser.uid
  const [admin, setAdmin] = useState(false)


  useEffect(() => {
    const getAdmins = async () => {
      const { docs } = await getDocs(collection(db, "users"))
      const datos = docs.map(item => ({ id: item.id, ...item.data() }))
      for (let index = 0; index < datos.length; index++) {
        if (datos[index].id == idUser) {
          setAdmin(true)
        }
      }
      // console.log('admin: ' + admin)
    }
    getAdmins()
  })
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
            admin == true ?
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

  const url = process.env.REACT_APP_BACKEND_URL + `favoritos/usuario/${idUser}`

  useEffect(() => {
    const getFavoritos = () => {
      axios.get(url)
        .then(response => {
          const { data } = response
          setFavorito(data)
        })
        .catch(e => {
          console.log(e)
        })
    }
    getFavoritos()

  }, [])
  return (
    <>
      {
        favorito.map((item, index) => {
          return (
            <>
              {
                item.id_rutina != null ?
                  (
                    <div className="bg-opacity-25 bg-white border-1 border-light card card-body m-5">
                      <div className="justify-content-between row">
                        <div className="col-11 col-md-6 col-lg-6">
                          <p>Nombre: {item.id_rutina[0].nombre}</p>
                        </div>
                      </div>
                      <div className="row">
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
            </>
          )
        })
      }

      {
        favorito.map((item, index) => {
          return (
            <>
              {
                item.id_dieta != null ?
                  (
                    <div className="bg-opacity-25 bg-white border-1 border-light card card-body m-5">
                      <div className="justify-content-between row">
                        <div className="col-11 col-md-6 col-lg-6">
                          <p>Nombre: {item.id_dieta[0].nombre}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-lg col-md">
                          <h6>Horario: {item.id_dieta[0].horario}</h6>
                          <h6>Alimentos: <br /> {item.id_dieta[0].alimentos}</h6>
                          <h6>Informacion nutricional: {item.id_dieta[0].infoNutricional}</h6>
                        </div>
                      </div>
                    </div>
                  )
                  :
                  (
                    <></>
                  )
              }
            </>
          )
        })
      }
    </>
  )
}
export default Cuenta