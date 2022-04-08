import React, {useState} from 'react';
import { app } from '../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import Registrar from './mini-componentes/Registrar-Sesion';
import Iniciar from './mini-componentes/Iniciar-Sesion';
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
        {/* <div className='col-lg-6 col-md-12 col-12 justify-content-center'>
        
        </div> */}
        <Registrar registro={registro} setEmail={setEmail} setPass={setPass}/>
        
        {/* Formulario de inicio de sesión */}
        {/* <div className='col-lg col-md col-12 justify-content-center'>
        
        </div> */}
        <Iniciar iniciar={iniciarSesion} setEmail={setEmail} setPass={setPass}/>
        </div>
        
    </div>
  )
}

export default Login;