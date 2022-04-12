import React, { useState } from 'react'
import { app } from '../firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import Formulario from './OtrosComponentes/Formulario'
import { useNavigate } from 'react-router-dom'

// Ultima modificación Constanza Castillo 12/04/2022
const Login = () => {
  const navegacion = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const auth = getAuth()
  const registro = (e) => {
    e.preventDefault()
    if (email == "") { }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        navegacion('/cuenta')
        // ...
      }).catch(e => {
        if (e == "FirebaseError: Firebase: Error (auth/invalid-email).") {
          alert("Correo invalido.")
        }
        else if (e == "FirebaseError: Firebase: Error (auth/internal-error).") {
          alert("Credenciales incorrectas")
        }
        else if (e == "FirebaseError: Firebase: Error (auth/wrong-password).") {
          alert("Contraseña Incorrecta")
        }
        else {
          alert(e)
        }
      })
  }

  const iniciarSesion = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        navegacion('/cuenta')
        // ...
      }).catch(e => {
        if (e == "FirebaseError: Firebase: Error (auth/invalid-email).") {
          alert("Correo invalido.")
        }
        else if (e == "FirebaseError: Firebase: Error (auth/internal-error).") {
          alert("Credenciales incorrectas")
        }
        else {
          alert(e)
        }
      })
  }

  return (
    <div className="pt-5">
      <div className='row container justify-content-evenly mt-5 pt-5'>
        {/* Formulario de registro */}
        <Formulario funcion={registro} id={"1"} setEmail={setEmail} setPass={setPass} titulo={"Registrarse"} tipo={null} />

        {/* Formulario de inicio de sesión */}
        <Formulario titulo={"Iniciar Sesión"} id={"1"} funcion={iniciarSesion} setEmail={setEmail} setPass={setPass} tipo={"inicio"} />
      </div>

    </div>
  )
}

export default Login