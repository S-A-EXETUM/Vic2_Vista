import React, { useState, useEffect } from 'react'
import { app } from '../firebaseconfig'
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"

// Ultima modificación Constanza Castillo 12/04/2022
const Cuenta = () => {
  const [email, setEmail] = useState('')
  const [time, setTime] = useState('')
  const user = getAuth()

  useEffect(() => {
    user.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email)
        setTime(user.metadata.creationTime)
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
              <span>Tiempo registrado: {time}</span>
            </div>
          </div>
          <div className="col-4">
            <button onClick={resetPassword} className='btn'>Cambiar contraseña</button>
          </div>
          <div className="col"></div>
        </div>

        <div className="col-12">

        </div>
      </div>
    </>
  )
}

export default Cuenta