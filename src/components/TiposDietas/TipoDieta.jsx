import React from 'react'
import { EnCreacion } from '../EnCreacion'

// Ultima modificación Matthew Rocco 12/04/2022
const TipoDieta = ({ nombre, descripcion }) => {
    return (
        <EnCreacion nombre={nombre} descripcion={descripcion} />
    )
}

export default TipoDieta