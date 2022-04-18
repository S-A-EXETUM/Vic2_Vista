import React, { useState, useEffect } from 'react'
import { app, db } from '../firebaseconfig'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

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
      console.log('admin: ' + admin)
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
                    <Cardsv />
                    <Cardsv />
                    <Cardsv />
                    <Cardsv />
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
  return (
    <>
      <div className="bg-opacity-25 bg-white border-1 border-light card card-body m-5">
        <div className="justify-content-between row">
          <div className="col-11 col-md-6 col-lg-6">
            <p>Nombre:</p>
          </div>

        </div>
        <div className="row">
          <div className="col col-lg col-md">
            <h6>Músculo:</h6>
            <h6>Descripción: <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, quidem rerum neque, natus, sed placeat distinctio repellendus obcaecati hic ipsa est reprehenderit voluptatem voluptas iste dicta voluptate voluptates! Corporis, dolore.</h6>
            <h6>Repeticiones: </h6>
            <h6>Set: </h6>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cuenta