import React, { useState } from 'react'
import { app, db } from '../firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import Formulario from './OtrosComponentes/Formulario'
import { useNavigate } from 'react-router-dom'

// Ultima modificación Constanza Castillo 12/04/2022
const Login = () => {
  const navegacion = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errorR, setErrorR] = useState('')
  const [errorL, setErrorL] = useState('')

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
        console.log(e.code)
        if (e.code == "auth/invalid-email") {
          setErrorR('Correo inválido')
        }
        else if (e.code == "auth/internal-error") {
          setErrorR('Credenciales incorrectas')
        }
        else if (e.code == "auth/weak-password") {
          setErrorR('contraseña debe tener por lo menos 6 caracteres!')
        }
        else if (e.code == "auth/missing-email") {
          setErrorR('Debe ingresar un correo electrónico')
        }
        else if (e.code == "auth/email-already-in-use") {
          setErrorR('Cuenta ya registrada')
        }
        else {
          setErrorR(e)
        }

        setTimeout(() => {
          setErrorR(null);
        }, 2000)
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
        console.log(e.code)
        if (e.code == "auth/invalid-email") {
          setErrorL('Correo inválido')
        }
        else if (e.code == "auth/internal-error") {
          setErrorL('Credenciales incorrectas')
        }
        else if (e.code == "auth/wrong-password") {
          setErrorL('Credenciales incorrectas')
        }
        else if (e.code == "auth/user-not-found") {
          setErrorL('Usuario no encontrado')
        }
        else {
          setErrorL(e)
        }

        setTimeout(() => {
          setErrorL(null);
        }, 2000)
      })
  }

  return (
    <div className="pt-5">
      <div className='row container justify-content-evenly mt-5 pt-5'>
        {/* Formulario de registro */}
        <Formulario funcion={registro} setEmail={setEmail} setPass={setPass} titulo={"Registrarse"} tipo={null} error={errorR} />

        {/* Formulario de inicio de sesión */}
        <Formulario titulo={"Iniciar Sesión"} funcion={iniciarSesion} setEmail={setEmail} setPass={setPass} tipo={"inicio"} error={errorL} />
      </div>

    </div>
  )
}

export default Login