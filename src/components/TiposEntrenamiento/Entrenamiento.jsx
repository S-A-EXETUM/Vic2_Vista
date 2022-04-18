import React from 'react'
import { EnCreacionRutina } from '../EnCreacionRutina'

// Ultima modificación Matthew Rocco 12/04/2022
const Entrenamiento = ({ nombre, usuario, descripcion }) => {
    return (
        <EnCreacionRutina nombre={nombre} usuario={usuario} descripcion={descripcion}></EnCreacionRutina>
    )
}

export default Entrenamiento