import React, {useState} from 'react';
import { app } from '../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import Formulario from './mini-componentes/Formulario';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navegacion = useNavigate();
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
        navegacion('/cuenta');
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
        navegacion('/cuenta');
        // ...
    })
  }

  return (
    <div className="pt-5">
        <div className='row container justify-content-evenly mt-5 pt-5'>
        {/* Formulario de registro */}
        <Formulario funcion={registro} id={"1"} setEmail={setEmail} setPass={setPass} titulo={"Registrarse"}/>
        
        {/* Formulario de inicio de sesión */}
        <Formulario titulo={"Iniciar Sesión"} id={"1"} funcion={iniciarSesion} setEmail={setEmail} setPass={setPass}/>
        </div>
        
    </div>
  )
}

export default Login;