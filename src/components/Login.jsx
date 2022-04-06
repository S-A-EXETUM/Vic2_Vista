import React, {useState} from 'react';
import { app } from '../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import Registrar from './mini-componentes/Registrar-Sesion';
import Iniciar from './mini-componentes/Iniciar-Sesion';

const Login = () => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const auth = getAuth();
  const registro = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,pass)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
    })
}

  const iniciarSesion = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,pass)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
    })
  }

  return (
    <div className="pt-5">
        <div className='row container justify-content-evenly mt-5 pt-5'>
        {/* Formulario de registro */}
        <Registrar registro={registro} setEmail={setEmail} setPass={setPass}/>
        {/* Formulario de inicio de sesión */}
        <Iniciar iniciar={iniciarSesion} setEmail={setEmail} setPass={setPass}/>
        </div>
        
    </div>
  )
}

export default Login;