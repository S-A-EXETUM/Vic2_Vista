import React, { useState, useEffect } from 'react'
import { app } from '../firebaseconfig'
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"

// Ultima modificación Constanza Castillo 12/04/2022
export const UsuarioLog = () => {
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
}
export const resetPassword = ({ email }) => {
    const user = getAuth()
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
            alert(error)
            // ..
        })
}

export const usuarioLogged = () => {
    const user = getAuth()
    const [idUser, setIdUser] = useState('')

    useEffect(() => {
        user.onAuthStateChanged((user) => {
            if (user) {
                setIdUser(user.uid)
            }
        })
    })
    return (idUser)
}