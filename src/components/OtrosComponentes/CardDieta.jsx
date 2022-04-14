import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai'

// Ultima modificación Matthew Rocco 12/04/2022
export default function CardDieta({ nombre, alimentos, infoNutricional, foto, horario, index }) {
    return (
        <>
            <div key={index} className="bg-opacity-10 bg-white border-1 border-white card card-body m-4">
                <div className="row">
                    <div className="col-8 col-lg-10 col-md-8">
                        <p>Nombre: {nombre}</p>
                    </div>
                    <div className="col col-lg col-md">
                        <button className='btn btn-sm btn-info bg-transparent border-0' ><AiIcons.AiOutlineStar style={{ 'width': '25px', 'height': '25px' }} /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 col-md-6">
                        <h6>Horario: {horario}</h6>
                        <h6>Alimentos: {alimentos}</h6>
                        <h6>Información Nutricional: <br /> {infoNutricional}</h6>
                    </div>
                    <div className="col-12 col-lg-7 col-md-6">
                        <img src={foto} alt="Imagen" style={{ 'width': '60%' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
